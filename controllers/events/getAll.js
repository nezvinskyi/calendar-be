const { Event } = require('../../models');
const HTTP_STATUS = require('../../helpers/httpStatusCodes');

const getAllEvents = async (req, res, next) => {
  try {
    const result = await Event.find({ userId: req.user._id });

    res.status(HTTP_STATUS.OK).json({
      status: 'success',
      code: HTTP_STATUS.OK,
      data: {
        result,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = getAllEvents;
