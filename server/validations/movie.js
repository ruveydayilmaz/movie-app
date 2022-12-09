const Joi = require('joi');

const bookmarkMovieValidation = Joi.object({
    userId: Joi.number().required(),
    movieId: Joi.number().required()
});

const removeBookmarkValidation = Joi.object({
    userId: Joi.number().required(),
    movieId: Joi.number().required()
});

const reviewMovieValidation = Joi.object({
    userId: Joi.number().required(),
    movieId: Joi.number().required(),
    review: Joi.string().required().boolean()
});

module.exports = {
    bookmarkMovieValidation,
    removeBookmarkValidation,
    reviewMovieValidation
}