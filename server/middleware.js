const logger = require('./helpers/logger');

const logPayload = (req, res, next) => {
  logger.info(req.body);
  next();
};

const validateId = (req, res, next) => {
  const { id } = req.params;
  if (!id) return res.status(400).json({ error: 'id is required' });
  next();
};

const validateBody = (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).json({ error: 'title & description are required'});
  next();
};

module.exports = { validateId, validateBody, logPayload };