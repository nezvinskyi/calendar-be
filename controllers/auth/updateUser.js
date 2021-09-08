const { user: service } = require('../../services');
const HTTP_STATUS = require('../../helpers/httpStatusCodes');

const updateUser = async (req, res, next) => {
  const {
    body,
    user: { _id: id },
  } = req;
  try {
    const updatedUser = await service.updateById(id, body);

    res.status(HTTP_STATUS.OK).json({
      status: 'Success',
      code: HTTP_STATUS.OK,
      data: {
        user: updatedUser,
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = updateUser;
