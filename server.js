const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const productsRoutes = require('./routes/products');
const { logger, auth, errorHandler } = require('./middleware');

const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(logger);
// app.use(auth);// Middleware for logging and authentication

app.use('/api/products', productsRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to the Product API! Go to /api/products to see all products.');
});

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});