const router = require('express').Router();

const Users = require('../../helpers/userModel');
const { generateToken } = require('../../helpers/tokenize');
const { errorMessage, invalidCredetials, welcomeMessage } = require('../../helpers/variables');

router.post('/register', registerUser);
router.post('/login', loginUser);

registerUser(req, res) => {
    let { password } = req.body;
    const hash = bcrypt.hashSync(password, 12);
    req.body.password = hash;

    Users.addUser(req.body)
        .then(addedUser =>
            res.status(201).json(addedUser);
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

    Users.findBy({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: welcomeMessage,
                    token: token,
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