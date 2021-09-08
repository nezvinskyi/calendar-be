const HTTP_STATUS = require('../helpers/httpStatusCodes')

const validateMiddleware = regValid => {
    return async (req, res, next) => {
      const error = await regValid(req.body)
  
      if (error) {
        res.status(HTTP_STATUS.BAD_REQUEST).json({
          status: 'Error',
          code: HTTP_STATUS.BAD_REQUEST,
          message: error.message,
        })
        return
      }
      next()
    }
  }
  
  module.exports = validateMiddleware