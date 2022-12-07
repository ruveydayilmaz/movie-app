const controller = require('../controllers/movie');
const router = require('express').Router();

router.post('/bookmarks', controller.bookmarkMovie);
router.delete('/bookmarks', controller.removeBookmark);
router.get('/bookmarks/:userId', controller.getBookmarks);
router.post('/reviews', controller.reviewMovie);
router.get('/reviews/:movieId', controller.getReviews);

module.exports = router;