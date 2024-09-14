const express = require('express');
const app = express();
const Service = require('./service');
const { validateBody, validateId } = require("./middleware");
const cors = require('cors');

app.use(cors());
app.use(express.json());

const service = new Service();

app.get('/issues', (req, res) => {
  const issues = service.getAll();
  return res.status(200).json(issues);
});

app.get('/issues/:id', validateId, function (req, res) {
  try {
    const issue = service.get(req.params.id);
    return res.status(200).json({ ...issue });

  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
})

app.post('/issues', validateBody, function (req, res) {
  const { title, description } = req.body;
  const issue = service.create(title, description);
  return res.status(201).json({ ...issue });
});

app.put('/issues/:id', validateId, validateBody, function (req, res) {
  const { id } = req.params;
  const { title, description } = req.body;
  
  try {
    const issue = service.update(id, title, description);
    return res.status(200).json({...issue });
  } catch (error) {
    return res.status(error.status).json({ error: error.message });
  }
});

app.delete('/issues/:id', validateId, function (req, res) {
  const { id } = req.params;
  
  try {
    service.delete(id);
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