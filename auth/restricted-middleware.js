const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    //authorization header
    const token = req.headers.authorization;

    // if(token && tokenNotInBlackList(token)) --> to check if token is invalid or black listed
    if(token) {
        jwt.verify(
            token,
            //secret goes here as the second argument to the jwt.verify method,
            (err, decodedToken) => {
                if(err) {
                    //This means the token is bad status code 401, sad path
                    //has it been reported stolen the token???
                    res.status(401).json({ message: 'Bad token' });
                } else {
                    //happy path
                    req.decodedToken = decodedToken;
                    next();
                }
            }
        )
    } else {
        res.status(400).json({ message: 'No credentials provided' });
    }
};