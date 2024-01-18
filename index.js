const express = require('express');
const app = express();
const port = 5000;

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
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


