const { regexMail, invalidEmail } = require('../helpers/variables');

module.exports = (req, res, next) => {
    const { email } = req.body;

    if (regexMail.test(email)) {
        next();
    } else {
        res.status(400).json({ 
            message: invalidEmail 
        });
    }
};