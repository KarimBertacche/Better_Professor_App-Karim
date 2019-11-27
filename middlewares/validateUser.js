const { 
    existingEmail, 
    invalidCredentials, 
    missingFields 
} = require('../helpers/variables');


module.exports = async (req, res, next) => {
    const { firstName, lastName, email, password } = req.body;

    const user = email !== undefined ? 
        await Users.findUserBy({ email }).first() : undefined;

    if (firstName && lastName && email && password && req.path === "/register") {
        (user === undefined) ? 
            next() : res.status(403).json({ message: existingEmail });
    } else if (email && password && req.path === "/login") {
        req.user = user;
        (user && bcrypt.compareSync(password, user.password)) ? 
            next() : res.status(401).json({ message: invalidCredentials });
    } else {
        res.status(400).json({ message: missingFields });
    };
};