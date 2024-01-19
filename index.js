const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// chart data values
const xArray = ["Italy", "France", "Spain", "USA", "Argentina"];
const yArray = [55, 49, 44, 24, 15];
const data = [{labels:xArray, values:yArray, type:"pie"}];

app.use(cors());
// Define a route to fetch data
app.get('/api/yash', (req, res) => {
  res.json(data);
});
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});


