const router = require('express').Router();

const Users = require('../../helpers/userModel');
const { generateToken } = require('../../helpers/tokenize');
const { 
    errorMessage, 
    invalidCredetials, 
    welcomeMessage, 
    loggedUserMessage 
} = require('../../helpers/variables');

router.post('/register', registerUser);
router.post('/login', loginUser);

registerUser(req, res) => {
    let { password } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    req.body.password = hash;

    Users.addUser(req.body)
        .then(addedUser =>
            let token = generateToken(addedUser);
            delete addedUser.password;
            res.status(201).json({
                message: welcomeMessage,
                token,
                addedUser
            });
        )
        .catch(error =>
            res.status(500).json({
                message: errorMessage,
                error: error.message
            });
        );
});

loginUser(req, res) => {
    let { username, password } = req.body;

    Users.findUserBy({ username })
        .then(foundUser => {
            if(foundUser && bcrypt.compareSync(password, foundUser.password)) {
                const token = generateToken(foundUser);
                delete foundUser.password;

                res.status(200).json({
                    message: loggedUserMessage,
                    token,
                    foundUser
                })
            } else {
                res.status(401).json({ message: invalidCredetials });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage,
                error: error.message
            });
        });
});

module.exports = router;