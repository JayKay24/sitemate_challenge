const express = require('express');
const app = express();
const Service = require('./service');

const service = new Service();

app.get('/issues/:id', function (req, res) {
  try {
    const issue = service.getIssue(req.params.id);
    return res.status(200).json({ ...issue });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
})

app.post('/issues/', function (req, res) {
  const { title, description } = service.getIssue(req.body);
  const issue = service.createIssue(title, description);
  return res.status(201).json({ ...issue });
});

app.put('/issues/:id', function (req, res) {
  const { id } = req.params;
  const { title, description } = req.body;
  
  try {
    const issue = service.updateIssue(id, title, description);
    return res.status(200).json({...issue });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
});

app.delete('/issues/:id', function (req, res) {
  const { id } = req.params;
  
  try {
    service.deleteIssue(id);
    return res.status(204).end();
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
});

app.use((err, req, res, next) => {
  const status = err.status || 500;
  const message = err.message || 'Internal Server Error';

  return res.status(status).json({ error: message });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});