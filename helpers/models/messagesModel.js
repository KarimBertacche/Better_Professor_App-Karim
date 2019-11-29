const db = require('../../config/db-config');

module.exports = {
    findMessages,
    findMessageById,
    addMessage,
    removeMessage
};

function findMessages() {
    return db('Messages AS m')
        .select("u.username AS sender","s.name AS recipient", "m.timestamp", "text")
        .leftJoin("Users AS u", "u.id", "m.user_id")
        .leftJoin("Students AS s", "s.id", "m.student_id");
}

function findMessageById(id){
    return db("Messages AS m")
        .select("u.username","s.name", "m.timestamp", "text")
        .leftJoin("Users AS u", "u.id", "m.user_id")
        .leftJoin("Students AS s", "s.id", "m.student_id")
        .where({ "m.student_id": id });
}

// function getById(id){
//     return db("Messages AS m")
    //     .select("u.username AS sender","s.name AS student name", "m.timestamp", "text")
    //     .join("Users AS u", "u.id", "m.user_id")
    //     .join("Students AS s", "s.id", "m.student_id")
    //     .where({ "m.id": id })
// }

async function addMessage(message) {
    const timestamp = JSON.stringify(new Date());
    const [id] = await db('Messages').insert({
        ...message, 
        timestamp 
    }, 'id');
    
    return db('Messages').where({ id }).first();
}

function removeMessage(id) {
    return db('Messages').where({ id }).del();
}