const express = require('express');
const logger = require('morgan');
const cors = require('cors');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const { eventsRoutes, userRoutes } = require('./routes');
require('./config/config-passport');

const app = express();

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short';

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use('/api/v1/events', eventsRoutes);
app.use('/api/v1/users', userRoutes);

app.use(notFound);

app.use(errorHandler);

module.exports = app;
