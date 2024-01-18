const express = require('express');
const app = express();


// Sample data to serve
const data = [
  { id: 1, name: 'yash1' },
  { id: 2, name: 'yash2' },
  { id: 3, name: 'yash3' },
];

// Define a route to fetch data
app.get('/api/data', (req, res) => {
  res.json(data);
});

