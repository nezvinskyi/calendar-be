const Joi = require('joi');

const validationSchema = newUser => {
  const schema = Joi.object({
    name: Joi.string(),
    email: Joi.string().email({ minDomainSegments: 2 }).required(),
    password: Joi.string().min(6).required(),
  });
  const { error } = schema.validate(newUser);
  return error;
};

module.exports = validationSchema;
