const { Schema } = require('mongoose');

const eventSchema = Schema(
  {
    date: {
      type: Date,
    },
    title: {
      type: String,
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
