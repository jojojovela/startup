const express = require('express');
const app = express();
const port = 3000;

// Serve static files from the 'public' directory
app.use(express.static('public'));

// Define your endpoints
app.get('/api/quote', (req, res) => {
  // Your code to fetch and return a quote
  res.json({ quote: 'This is a sample quote' });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is listening at http://localhost:${port}`);
});
