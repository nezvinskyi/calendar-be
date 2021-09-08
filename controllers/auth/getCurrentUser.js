const HTTP_STATUS = require('../../helpers/httpStatusCodes');

const getCurrentUser = (req, res, next) => {
  res.status(HTTP_STATUS.OK).json({
    status: 'Success',
    code: HTTP_STATUS.OK,
    data: {
      id: req.user._id,
      email: req.user.email,
      name: req.user.name,
    },
  });
};

module.exports = getCurrentUser;
