const router = require('express').Router();

const Messages = require('../../helpers/models/messagesModel');
const validateStudentId = require('../../middlewares/validateStudentId');
const validateMessage = require('../../middlewares/validateMessage');
const { 
    errorMessage, 
    invalidToken,
    noStudentMessages
} = require('../../helpers/variables');

router.get('/students/:id', validateStudentId, getMessagesByStudentId);
router.get('/', getMessages);
router.post('/', validateMessage, addNewMessage);


function getMessages(req, res) {
    Messages.find()
        .then(messages => {
            res.status(200).json(messages);
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
};

function getMessagesByStudentId(req, res) {
    const { id } = req.params;

    Messages.findById(id)
        .then(studentMessages => {
            if (studentMessages) {
                res.status(200).json(studentMessages);
            } else {
                res.status(401).json({ 
                    message: noStudentMessages
                });
            };
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
};

function addNewMessage(req, res) {
    const { user_id } = req.decodedToken;
    const { message, timestamp, student_id }  = req.newMessage;
    const text = { message, timestamp, user_id, student_id};
    text.send_to_self = (req.newMessage.student_id) ? false : true;

    Messages.add(text)
        .then(addedMessage => {
            res.status(201).json(addedMessage);
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
};

module.exports = router;