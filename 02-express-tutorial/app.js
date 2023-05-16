const express = require('express');
const app = express();

const peopleRouter = require('./routes/people');
const authRouter = require('./routes/auth');

app.use(express.static('./methods-public'));
// parse form data
app.use(express.urlencoded({ extended: false }));
// parse json
app.use(express.json());

app.use('/login', authRouter);

app.use('/api/people', peopleRouter);

app.listen(3000, () => {
  console.log('Server is running on port 3000...');
});
