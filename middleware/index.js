require('dotenv').config();

function logger(req, res, next) {
  console.log(`${req.method} ${req.url}`);
  next();
}
function auth(req, res, next) {
  if (req.path === '/' || req.path.startsWith('/public')) return next();
  const authHeader = req.headers['authorization'];
  if (authHeader === `Bearer ${process.env.AUTH_TOKEN}`) return next();
  res.status(401).json({ message: 'Unauthorized' });
}

function errorHandler(err, req, res, next) {
  console.error(err.stack);
  res.status(500).json({ message: 'Internal Server Error' });
}

module.exports = { logger, auth, errorHandler };