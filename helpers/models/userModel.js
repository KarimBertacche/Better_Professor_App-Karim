const db = require('../config/db-config');

module.exports = {
    addUser,
    findUserBy
}

addUser(user) => {
    return db('Users').insert(user).returning('id').then(([id]) => {
        return this.findUserBy({ id });
    });
};

findUserBy(filter) => {
    return db('Users').where(filter).first();
};