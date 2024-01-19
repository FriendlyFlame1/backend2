const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Sample data to serve
const data = [
  { id: 1, Text: 'Welcome' },
  { id: 2,  Text: 'Server by Yash' },
  { id: 3, Text: 'Data by Backend' },
];
app.use(cors());
// Define a route to fetch data
app.get('/api/yash', (req, res) => {
  res.json(data);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


