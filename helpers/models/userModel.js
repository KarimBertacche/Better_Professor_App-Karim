const db = require('../config/db-config');

module.exports = {
    addUser,
}

addUser(user) => {
    return db('users').insert(user).returning('id').then(([id]) => {
        return this.findUserBy({ id });
    });
};

findUserBy(filter) => {
    return db('users').where(filter).first();
};