const Joi = require("joi");

const registerValidation = (data) => {
  const signUpSchema = Joi.object({
    name: Joi.string().min(6).required(),
    email: Joi.string().min(6).required().email(),

    password: Joi.string().pattern(new RegExp("^[a-zA-Z0-9]{3,30}$")),
    confirmPassword: Joi.ref("password"),

    dob: Joi.string().min(4).required(),
    phone: Joi.string().min(6).required(),
    address: Joi.string().min(6).required(),
  });
  return signUpSchema.validate(data);
};

const loginValidation = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().min(6).required().email(),
    password: Joi.string().min(6).required(),
  });
  return loginSchema.validate(data);
};

module.exports = { registerValidation, loginValidation };
