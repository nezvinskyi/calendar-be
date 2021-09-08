const { model } = require('mongoose');
const { eventSchema } = require('./schemas');

const Event = model('event', eventSchema);

module.exports = Event;
