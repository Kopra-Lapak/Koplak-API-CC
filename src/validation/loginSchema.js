const Joi = require("joi");

const loginValidate = Joi.object({
    email: Joi.string()
        .email()
        .required(),
    password: Joi.string()
        .required()
}).options({ abortEarly: false });

module.exports = { loginValidate };
