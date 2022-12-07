const models = require('../models');
const {sendConfirmationEmail} = require('../helpers/mailer');
const bcrypt = require('bcrypt');

const register = async (req, res) => {
    const { email, password, birthday, profilePic, username } = req.body;

    try {
        const oldUser = await models.User.findOne({where: {email}});
        const oldUsername = await models.User.findOne({where: {username}});

        if(oldUser) {
            return res.status(409).json({
                success: false,
                data: null,
                message: 'User already exists'
            });
        }

        if(oldUsername) {
            return res.status(409).json({
                success: false,
                data: null,
                message: 'Username already exists'
            });
        }

        const hashedPassword = await bcrypt.hash(password, 12);

        const user = await models.User.create({
            email: email,
            password: hashedPassword,
            birthday: birthday,
            profilePic: profilePic,
            username: username
        });

        await sendConfirmationEmail({toUser: email, hash: user.id});

        res.status(201).json({
            success: true,
            data: user,
            message: 'Please check your email to activate your account.'
        });
    } catch (error) {
        console.log(error)
        res.status(500).json({
            success: false,
            data: error,
            message: 'Error encountered while registering user'
        });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await models.User.findOne({where: {email}});

        if(!user) {
            return res.status(404).json({
                success: false,
                data: null,
                message: 'User does not exist'
            });
        }

        const isMatch = await bcrypt.compare(password, user.hashedPassword);

        if(!isMatch) {
            return res.status(401).json({
                success: false,
                data: null,
                message: 'Incorrect password'
            });
        }

        if(!user.confirmed) {
            return res.status(401).json({
                success: false,
                data: null,
                message: 'Please confirm your email address'
            });
        }

        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        const refreshToken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        res.status(200).json({
            success: true,
            data: {
                token,
                refreshToken,
                user
            },
            message: 'User logged in successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error.message,
            message: 'Error encountered while logging in user'
        });
    }
}

const activate = async (req, res) => {
    const { hash } = req.params;

    try {
        const confirmationHash = await models.User.findOne({where: {id: hash}});

        if(!hash) {
            return res.status(404).json({
                success: false,
                data: null,
                message: 'Invalid confirmation link'
            });
        }

        await models.User.update({confirmed: true}, {where: {id: hash}});

        res.status(200).json({
            success: true,
            data: null,
            message: 'Account activated successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            data: error.message,
            message: 'Error encountered while activating user'
        });
    }
}

module.exports = {
    register,
    login,
    activate
};