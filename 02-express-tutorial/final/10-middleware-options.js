const expres = require('express');
const app = expres();
const morgan = require('morgan');

const logger = require('./logger');
const authorize = require('./authorize');

// app.use([logger, authorize]);

// req => middleware => res
// app.use([logger, authorize]);
// api/home/about/products/items

// app.use(expres.static('./public'));

app.use(morgan('tiny'));
app.get('/', (req, res) => {
  res.send('Home page');
});
app.get('/about', (req, res) => {
  res.send('About page');
});
app.get('/api/products', (req, res) => {
  res.send('Products page');
});
app.get('/api/items', [logger, authorize], (req, res) => {
  console.log(req.user);

  res.send('Items page');
});

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
