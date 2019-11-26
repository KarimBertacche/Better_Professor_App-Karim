const db = require('../../config/db-config');

module.exports = {
    getAllMessages,
    getMessagesBy,
    getUserMessagesById,
    findMe, 
    add, 
    remove
};

function getAllMessages() {
    return db('Messages');
}

function getMessageBy(id) {
    return db('Messages').where({ id }).first();
}

function getUserMessagesById(user_id) {
    return db('Messages').select(
        'id AS message_id',
        'text',
        'send_to_self',
        'timestamp'
    ).where({ user_id });
}