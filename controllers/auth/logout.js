const logout = async (req, res, next) => {
  try {
    res.status(204).json({
      status: 'success',
      code: 204,
      message: 'No Content',
    });
  } catch (error) {
    next(error);
  }
};

module.exports = logout;
