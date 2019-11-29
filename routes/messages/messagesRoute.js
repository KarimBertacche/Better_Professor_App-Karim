const router = require('express').Router();

const Messages = require('../../helpers/models/messagesModel');
const validateStudentId = require('../../middlewares/validateStudentId');
const validateMessage = require('../../middlewares/validateMessage');
const { 
    errorMessage, 
    invalidToken,
    noStudentMessages,
    deleteEntry
} = require('../../helpers/variables');

router.get('/students/:id', validateStudentId, getMessagesByStudentId);
router.get('/', getMessages);
router.post('/', validateMessage, addNewMessage);
router.delete('/:id', deleteMessage);


function getMessages(req, res) {
    Messages.findMessages()
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

    Messages.findMessageById(id)
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
    const { text, timestamp, student_id }  = req.newMessage;
    const message = { text, timestamp, user_id, student_id};
    message.send_to_self = (req.newMessage.student_id) ? false : true;

    Messages.addMessage(message)
        .then(addedMessage => {
            res.status(201).json(addedMessage);
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        });
};

function deleteMessage(req, res) {
    const { id } = req.params;

    Students.removeMessage(id)
        .then(message => {
            res.status(200).json({
                message: deleteEntry(id)
            });
        })
        .catch(error => {
            res.status(500).json({
                message: errorMessage
            });
        }); 
}

module.exports = router;