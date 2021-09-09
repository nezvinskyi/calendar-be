const { Schema } = require('mongoose');

const eventSchema = Schema(
  {
    start: {
      type: Number,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      default: 'New Event',
      // required: true,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'user',
    },
    comments: {
      type: String,
    },
  },
  { versionKey: false, timestamps: true },
);

module.exports = eventSchema;
