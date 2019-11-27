const { missingBodyData } = require('../helpers/variables');

module.exports = (req, res, next) => {
    if (Object.keys(req.body).length !== 0 && req.body.constructor === Object) {
        next();
    } else {
        res.status(400).json({ message: missingBodyData });
    }
};