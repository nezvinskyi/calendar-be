const { Event } = require('../../models');

const deleteEvent = async (req, res) => {
  try {
    await Event.findOneAndDelete({ _id: req.params.id });
    res.status(200).json({
      status: 'Success',
      code: 200,
      message: `Transaction with id ${req.params.id} was deleted`,
    });
  } catch (error) {
    next(error);
  }
};

module.exports = deleteEvent;
