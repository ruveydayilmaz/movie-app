const Joi = require('joi');

const bookmarkMovieValidation = Joi.object({
    movieId: Joi.number().required()
});

const reviewMovieValidation = Joi.object({
    movieId: Joi.number().required(),
    review: Joi.boolean().required(),
});

module.exports = {
    bookmarkMovieValidation,
    reviewMovieValidation
}