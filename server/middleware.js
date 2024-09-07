const validateId = (req, res, next) => {
  const { id } = req.query;
  if (!id) return res.status(400).json({ error: 'id is required' });
  next();
};

const validateBody = (req, res, next) => {
  const { title, description } = req.body;
  if (!title || !description) return res.status(400).json({ error: 'title & description are required'});
  next();
};

module.exports = { validateId, validateBody };