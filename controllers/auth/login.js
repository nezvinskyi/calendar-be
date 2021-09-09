const { user: service } = require('../../services');
const jwtHelper = require('../../helpers/jwtHelper');
const HTTP_STATUS = require('../../helpers/httpStatusCodes');

const login = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const user = await service.getOne({ email });
    if (!user || !user.comparePassword(password)) {
      res.status(HTTP_STATUS.UNAUTHORIZED);
      throw new Error('Email or password is wrong');
    }
    const accessToken = jwtHelper.getAccessToken(user._id);

    res.status(HTTP_STATUS.OK).json({
      status: 'Success',
      code: HTTP_STATUS.OK,
      data: {
        token: accessToken.token,
        user: { email: user.email, name: user.name, avatar: user.avatarURL },
      },
    });
  } catch (error) {
    next(error);
  }
};

module.exports = login;
