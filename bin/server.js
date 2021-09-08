const mongoose = require('mongoose');
const app = require('../app');
require('dotenv').config();

const { PORT = 5000, DB_HOST } = process.env;

mongoose
  .connect(DB_HOST, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true,
  })
  .then(() => {
    console.log('Mongo database is connected');
  })
  .then(() => {
    console.log(`Server started on PORT ${PORT}`);
    app.listen(PORT);
  })
  .catch(error => {
    console.log(`Connection error: ${error.message}`);
    process.exit(1);
  });
