const controller = require('../controllers/user');
const router = require('express').Router();

const validate = require('../middlewares/validate');
const schema = require('../validations/user');

router.post('/register', validate(schema.registerValidation), controller.register);
router.post('/login', validate(schema.loginValidation), controller.login);
router.get('/confirm/:hash', controller.activate);

module.exports = router;