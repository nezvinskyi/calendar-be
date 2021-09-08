// const { v4: uuidv4 } = require('uuid');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const { JWT_SECRET } = process.env;

const getAccessToken = userId => {
  const payload = {
    id: userId,
    type: 'access',
    iat: Math.floor(Date.now() / 1000),
  };
  return {
    id: payload.id,
    token: jwt.sign(payload, JWT_SECRET, { expiresIn: '1d' }),
  };
};

const getRefreshToken = () => {
  // const payload = {
  //   id: uuidv4(),
  //   type: 'refresh',
  //   iat: Math.floor(Date.now() / 1000),
  // };
  // return {
  //   id: payload.id,
  //   token: jwt.sign(payload, JWT_SECRET, { expiresIn: '7d' }),
  // };
};

module.exports = {
  getAccessToken,
  getRefreshToken,
};
