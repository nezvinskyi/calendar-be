const HTTP_STATUS = require('../helpers/httpStatusCodes');
const { sessions: sesService } = require('../services');

const authRefresh = async (req, res, next) => {
  const usedToken = req.get('Authorization').replace(/^Bearer\s+/, "");
  const session = await sesService.getOne({ usedToken });
  const { validToken } = session;
  
  if (validToken === false) {
    res.status(HTTP_STATUS.CONFLICT).json({
      status: 'Error',
      code: HTTP_STATUS.CONFLICT,
      message: 'Token was in use',
    })
    return
  };
  next()
};

module.exports = authRefresh;