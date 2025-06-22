const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Product = require('./models/Product');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/ecommerce', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get('/api/products', async (req, res) => {
  const products = await Product.find();
  res.json(products);
});

app.post('/api/products', async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.send('Product saved!');
});

app.listen(5000, () => {
  console.log('Backend running on http://localhost:5000');
});