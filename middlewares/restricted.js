const jwt = require('jsonwebtoken');

const secret = require('../config/secrets');
const {
    missingCredentials,
    invalidToken
} = require('../../helpers/variables');

module.exports = (req, res, next) => {
    const token = req.headers.authorization;

    if(token) {
        jwt.verify(
            token,
            secret.jwtSecret,
            (err, decodedToken) => {
                if(err) {
                    res.status(401).json({ 
                        message: invalidToken,
                        error: err.message 
                    });
                } else {
                    req.decodedToken = decodedToken;
                    next();
                }
            }
        )
    } else {
        res.status(400).json({ message: missingCredentials });
    }
};