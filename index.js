const express = require('express');
const app = express();

// The service port. In production the front-end code is statically hosted by the service on the same port.
const port = process.argv.length > 2 ? process.argv[2] : 3000;

// JSON body parsing using built-in middleware
app.use(express.json());

// Serve up the front-end static content hosting
app.use(express.static('public'));

// Router for service endpoints
var apiRouter = express.Router();
app.use(`/api`, apiRouter);

app.get('/getRandomQuote', async (req, res) => {
  try {
      const quoteResponse = await fetch('https://api.quotable.io/random');
      const quoteData = await quoteResponse.json();

      res.json(quoteData);
  } catch (error) {
      console.error('Error fetching quote:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.use((_req, res) => {
  res.sendFile('index.html', { root: 'public' });
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});