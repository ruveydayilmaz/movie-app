const controller = require('../controllers/movie');
const router = require('express').Router();

const validate = require('../middlewares/validate');
const schema = require('../validations/movie');

router.post('/bookmarks/:movieId', controller.bookmarkMovie);
router.get('/bookmarks/', controller.getBookmarks);
router.post('/reviews', validate(schema.reviewMovieValidation), controller.reviewMovie);
router.get('/reviews/:movieId', controller.getReviews);

module.exports = router;