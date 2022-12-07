const router = require('express').Router();
const movieRouter = require('./movie');
const userRouter = require('./user');

router.use('/', movieRouter);
router.use('/', userRouter);

router.use((req, res) => {
    res.send("<h1>Nothin' here!</h1>");
});
  
module.exports = router;