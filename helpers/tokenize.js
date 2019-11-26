const jwt = require('jsonwebtoken');
const secret = require('../../config/secrets');

export.modules = {
    generateToken: (user) => {
        const payload = {
            subject: user.id,
            username: user.username,
            role: user.role
        }
    
        const options = {
            expiresIn: '30d'
        }
    
        return jwt.sign{
            payload,
            secret.jwtSecret,
            options
        }
    }
};