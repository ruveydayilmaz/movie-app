const models = require('../models');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const {uploadPicture} = require('../helpers/uploader');
const {sendConfirmationEmail} = require('../helpers/mailer');


const register = async (req, res) => {
    let message = '';

    const { email, password, birthday, profilePic, username } = req.body;

    try {

        message = "Could not fetch user information"
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

        message = "Could not upload profile picture"
        const bufferedProfilePic = Buffer.from(profilePic.replace(/^data:image\/\w+;base64,/, ""), 'base64');
        const profilePicUrl = await uploadPicture(bufferedProfilePic);

        message = "Could not create user"
        const user = await models.User.create({
            email: email,
            password: hashedPassword,
            birthday: birthday,
            profilePic: profilePicUrl,
            username: username
        });

        message = "Could not send confirmation email"
        await sendConfirmationEmail({toUser: email, hash: user.id});

        return res.status(201).json({
            success: true,
            data: user,
            message: 'Please check your email to activate your account.'
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            data: null,
            message: message
        });
    }
}

const login = async (req, res) => {
    let message = '';

    const { email, password } = req.body;

    try {
        message = "Could not fetch user information"
        const user = await models.User.findOne({where: {email}});

        if(!user) {
            return res.status(404).json({
                success: false,
                data: null,
                message: 'User does not exist'
            });
        }

        message = "Could not compare passwords"
        const isMatch = await bcrypt.compare(password, user.password);

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

        message = "Could not generate token"
        const token = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '1d'});
        const refreshToken = jwt.sign({id: user.id}, process.env.JWT_SECRET, {expiresIn: '7d'});

        return res.status(200).json({
            success: true,
            data: {
                token,
                refreshToken,
                user
            },
            message: 'User logged in successfully'
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            data: null,
            message: message
        });
    }
}

const activate = async (req, res) => {
    let message = '';

    const { hash } = req.params;

    try {
        message = "Could not fetch user information"
        await models.User.findOne({where: {id: hash}});

        if(!hash) {
            return res.status(404).json({
                success: false,
                data: null,
                message: 'Invalid confirmation link'
            });
        }

        message = "Could not activate user"
        await models.User.update({confirmed: true}, {where: {id: hash}});

        return res.status(200).json({
            success: true,
            data: null,
            message: 'Account activated successfully'
        });
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            data: null,
            message: message
        });
    }
}

const findByToken = async (token) => {
    let message = '';

    try {
        message = "Could not fetch user information"
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

        message = "Could not find user"
        const user = await models.User.findOne({where: {id: decoded.id}});
        
        if(!user) {
            return null;
        }
        
        return user;
    } catch (error) {
        console.log(error)
        return res.status(500).json({
            success: false,
            data: null,
            message: message
        });
    }
}

module.exports = {
    register,
    login,
    activate,
    findByToken
};