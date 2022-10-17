const express = require('express');
const app = express();

const connect = require('./modules/connect');
const routes = require('./routes/router');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Connect to Database
void (async () => {
  try {
    await connect();
    console.log('connected to database');
  } catch (error) {
    console.log('error connecting to database:', error.message);
  }
})();


app.get('/', (req, res) => {
  res.status(200).json({ message: 'Peace' });
});


app.use('/api', routes);


module.exports = app;