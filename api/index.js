const express = require('express');
const app = express();

// Define the endpoint that should only respond to curl/fetch requests
app.get('/endpoint', (req, res) => {
  // Check if the request is from a normal browser
  const userAgent = req.get('User-Agent');
  const isBrowser = !!userAgent && !userAgent.includes('curl') && !userAgent.includes('fetch');

  if (isBrowser) {
    // Return a 403 error for requests from normal browsers
    res.status(403).send('Not allowed.');
  } else {
    // Return the response for curl/fetch requests
    res.send('working3905');
  }
});

// Handle all other requests with a 404 error
app.use((req, res) => {
  res.status(404).send('Not found.');
});

// Start the server
module.exports = app;
