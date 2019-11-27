const router = require('express').Router();

const Users = require('../../helpers/models/usersModel');
const { errorMessage, missingUsers } = require('../../helpers/variables');

router.get('/', getUsers);

function getUsers(req, res) {
    Users.findAllUsers()
        .then(users => {
            if (users && users.length) {
                res.status(200).json(users);
            } else {
                res.status(401).json({
                    message: missingUsers
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
}

module.exports = router;