const Users = require('../helpers/models/studentsModel');
const { errorMessage, invalidStudentId } = require('../helpers/variables');

module.exports = (req, res, next) => {
    const { id } = req.params;

    Users.findById(id)
        .then(student => {
            if (student) {
                next();
            } else {
                res.status(400).json({ 
                    message: invalidStudentId 
                });
            }
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
}