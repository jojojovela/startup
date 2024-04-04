const cookieParser = require("cookie-parser")
const express = require('express');
const db = require('./database');
const app = express();
const bcrypt = require('bcrypt');
const { v4: uuidv4 } = require('uuid');
const authCookieName = 'token';
// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 4000;

// JSON body parsing using built-in middleware
app.use(express.json());

app.use(cookieParser())

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Connect to the database
db.connectDB().then(() => {
  console.log('Connected to MongoDB');
}).catch((ex) => {
  console.error('Unable to connect to database:', ex.message);
  process.exit(1);
});

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);
// In-memory array to simulate storing comments on the server
let storedCommentData = [];


app.post('/api/auth/createAccount', async (req, res) => {
  const { username, password } = req.body;

  // Check if the username already exists
  const existingUser = await getUser(username);
  if (existingUser) {
    return res.status(400).send({ msg: 'Username already exists' });
  }
  console.log("before hash")
  // Hash the password before saving to the database
  const hashedPassword = await bcrypt.hash(password, 10);
  console.log("passed hash")

  // Save the new user to the database
  await createUser(username, hashedPassword);

  res.status(201).send({ msg: 'Account created successfully' });
});

apiRouter.post('/auth/login', async (req, res) => {
  console.log(req.body)
  const user = await db.getUser(req.body.username);
  if (user) {
    if (await bcrypt.compare(req.body.password, user.password)) {
      setAuthCookie(res, user.token);
      res.send({ id: user._id });
      return;
    }
  }
  res.status(401).send({ msg: 'Unauthorized' });
});

// DeleteAuth token if stored in cookie
apiRouter.delete('/auth/logout', (_req, res) => {
  res.clearCookie(authCookieName);
  res.status(204).end();
});

// GetUser returns information about a user
apiRouter.get('/user/:email', async (req, res) => {
  const user = await getUser(req.params.username);
  if (user) {
    const token = req?.cookies.token;
    res.send({ username: user.username, authenticated: token === user.token });
    return;
  }
  res.status(404).send({ msg: 'Unknown' });
});

// secureApiRouter verifies credentials for endpoints
var secureApiRouter = express.Router();
apiRouter.use(secureApiRouter);

secureApiRouter.use(async (req, res, next) => {
  authToken = req.cookies[authCookieName];
  const user = await db.getUserByToken(authToken);
  if (user) {
    next();
  } else {
    res.status(401).send({ msg: 'Unauthorized' });
  }
});

secureApiRouter.get('/getRandomQuote', async (req, res) => {
  try {
      const quoteResponse = await fetch('https://api.quotable.io/random');
      const quoteData = await quoteResponse.json();

      res.json(quoteData);
  } catch (error) {
      console.error('Error fetching quote:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

secureApiRouter.post('/submitComment', async (req, res) => {
  try {
    const commentData = req.body;

    // Assuming you have a collection named 'comments' in your MongoDB database
    await db.insertComment(commentData);

    res.status(201).send({ msg: 'Comment saved successfully' });
  } catch (error) {
    console.error('Error saving comment:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
secureApiRouter.get('/getAllComments', async (req, res) => {
  try {
    const comments = await db.getAllComments();
    res.json(comments);
  } catch (error) {
    console.error('Error retrieving comments:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
secureApiRouter.post('/api/likeComment', async (req, res) => {
  try {
      // Assuming your data is received in the request body
      const { commentId } = req.body;

      // Here you can process the commentId as needed, increment likes, save to a database, etc.
      // For simplicity, let's just log it for now
      console.log('Liked comment with ID:', commentId);

      // Return the updated comment (you might want to send the updated likes count)
      res.json({ commentId });
  } catch (error) {
      console.error('Error handling likeComment:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});
secureApiRouter.get('/getNotifications', (req, res) => {
  try {
    // Get existing notifications from localStorage
    const notifications = JSON.parse(localStorage.getItem('notifications')) || [];
    res.json(notifications);
  } catch (error) {
    console.error('Error retrieving notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});
secureApiRouter.post('/clearNotifications', (req, res) => {
  try {
    // Clear notifications on the server
    storedNotifications = [];
    res.status(200).json({ message: 'Notifications cleared successfully' });
  } catch (error) {
    console.error('Error clearing notifications:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

function setAuthCookie(res, authToken) {
  res.cookie(authCookieName, authToken, {
    secure: true,
    httpOnly: true,
    sameSite: 'strict',
  });
}

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});