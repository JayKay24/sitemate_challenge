const express = require('express');
const app = express();

app.get('/issues/:id', function (req, res) {
  res.send('Hello World');
})

app.post('/issues/', function (req, res) {
  res.send('Hello World');
});

app.put('/issues/:id', function (req, res) {
  res.send('Hello World');
});

app.delete('/issues/:id', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});