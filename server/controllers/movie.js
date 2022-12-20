const models = require('../models');

const bookmarkMovie = async (req, res) => {
    let message = '';

    const { movieId } = req.params;
    
    try {
        message = "Could not get movie"
        const isBookmarked = await models.Bookmark.findOne({
            where: {
                userId: req.user?.id,
                movieId: movieId
            }
        });

        if (isBookmarked) {
            message = "Could not remove bookmark"
            const bookmark = await models.Bookmark.destroy({
                where: {
                    userId: req.user?.id,
                    movieId: movieId
                }
            });

            res.status(200).json({
                success: true,
                data: bookmark,
                message: 'Bookmark removed successfully'
            });
            
        } else {
            message = "Could not bookmark movie"
            const bookmark = await models.Bookmark.create({
                userId: req.user?.id,
                movieId: movieId
            });

            res.status(200).json({ 
                success: true,
                data: bookmark,
                message: 'Movie bookmarked successfully'
             });
        }

    } catch (error) {
        res.status(500).json({ 
            success: false,
            data: null,
            message: message
         });
    }
}

const getBookmarks = async (req, res) => {

    try {
        const bookmarks = await models.Bookmark.findAll({
            where: {
                userId: req.user?.id
            },
            attributes: ['movieId']
        });

        res.status(200).json({ 
            success: true,
            data: bookmarks,
            message: 'Bookmarks retrieved successfully'
         });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            data: error.message,
            message: 'Error encountered while retrieving bookmarks'
         });
    }
}

const reviewMovie = async (req, res) => {
    const { movieId, review } = req.body;

    try {
        const movieReview = await models.Review.create({
            userId: req.user?.id,
            movieId: movieId,
            review: review
        });

        res.status(201).json({ 
            success: true,
            data: movieReview,
            message: 'Movie reviewed successfully'
         });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            data: error.message,
            message: 'Error encountered while creating movie review'
         });
    }
}

const getReviews = async (req, res) => {
    const { movieId } = req.params;

    try {
        const reviews = await models.Review.findAll({
            where: {
                movieId
            }
        });

        res.status(200).json({ 
            success: true,
            data: reviews,
            message: 'Reviews retrieved successfully'
         });
    } catch (error) {
        res.status(500).json({ 
            success: false,
            data: error.message,
            message: 'Error encountered while retrieving reviews'
         });
    }
}

module.exports = {
    bookmarkMovie,
    getBookmarks,
    reviewMovie,
    getReviews
}