const router = require('express').Router();

router.post('/register', registerUser);
router.post('/login', loginUser);

registerUser(req, res) => {
    let { password } = req.body;
    
});

loginUser(req, res) => {
    let { username, password } = req.body;

    Users.findBy({ username })
        .then(user => {
            if(user && bcrypt.compareSync(password, user.password)) {
                const token = generateToken(user);
                res.status(200).json({
                    message: `Welcome ${user.username}`,
                    token: token,
                })
            } else {
                res.status(401).json({ message: 'Invalid Credentials' });
            }
        })
        .catch(error => {
            res.status(500).json(error);
        });
});

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
        roles: ['student'],
    }

    const option = {
        expiresIn: '1d',
    }

    const secret = jwt.sign{
        payload,
        process.env.NODE_ENV === 'development' ? 'devsecrets' : process.env.SECRET,
        options,
    }

    return result;
};

module.exports = router;