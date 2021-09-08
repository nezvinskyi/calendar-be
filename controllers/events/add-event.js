const { Event } = require('../../models');

const addEvent = async (req, res, next) => {
  try {
    const event = req.body;

    const result = await Event.create(event);
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = addEvent;
