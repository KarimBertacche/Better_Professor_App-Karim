const db = require('../../config/db-config');

module.exports = {
    addUser,
    findAllUsers,
    findUserBy,
    removeUser
}

function addUser(user) {
    return db('Users').insert(user).returning('id').then(([id]) => {
        return this.findUserBy({ id });
    });
};

function findAllUsers() {
    return db('Users');
}


function findUserBy(filter) {
    return db('Users').where(filter).first();
};

function removeUser(user_id) {
    return db('Users').where({ id: user_id }).del();
}

