const db = require('../../config/db-config');

module.exports = {
    find,
    findById,
    add
};

function find() {
    return db('Messages AS m')
        .leftJoin("Users AS u", "u.id", "m.user_id")
        .leftJoin("Students AS s", "s.id", "m.student_id")
        .select("u.username AS sender","s.name AS recipient", "m.timestamp", "text");
}

function findById(id){
    return db("Messages AS m")
    .join("Users AS u", "u.id", "m.user_id")
    .join("Students AS s", "s.id", "m.student_id")
    .select("u.username","s.name", "m.timestamp", "text")
    .where({ "m.student_id": id });
}

function getById(id){
    return db("Messages AS m")
    .join("Users AS u", "u.id", "m.user_id")
    .join("Students AS s", "s.id", "m.student_id")
    .select("u.username AS sender","s.name AS student name", "m.timestamp", "text")
    .where({ "m.id": id })
}

async function add(message) {
    const [id] = await db("Messages").insert(message, "id");
    return getById(id);
}