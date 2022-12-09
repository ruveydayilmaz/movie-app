const Joi = require('joi');

const registerValidation = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    birthday: Joi.date().max('1-1-2005').required(),
    profilePic: Joi.string(),
    username: Joi.string().min(6).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

const loginValidation = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().min(6).required().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$'))
});

module.exports = {
    registerValidation,
    loginValidation
}