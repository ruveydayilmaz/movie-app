const controller = require('../controllers/user');
const router = require('express').Router();

router.post('/register', controller.register);
router.post('/login', controller.login);
router.get('/confirm/:hash', controller.activate);

module.exports = router;