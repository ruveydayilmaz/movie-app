const JWT = require('jsonwebtoken');

const { findByToken } = require('../controllers/user');

const authenticate = (req, res, next) => {

    const token = req.header('x-auth');

    let decoded;

    try {
        decoded = JWT.verify(token, process.env.JWT_SECRET);
    }
    catch (e) {
        return res.status(401).send({
            success: false,
            data: null,
            message: 'Authentication failed because of invalid token'
        });
    }

    findByToken(token).then((user) => {
        if (!user) {
            return Promise.reject();
        }

        req.user = user;
        req.token = token;
        next();
        
    }).catch((e) => {
        return res.status(401).send({
            success: false,
            data: null,
            message: 'Authentication failed because of invalid token'
        });
    });
};

module.exports = { authenticate };