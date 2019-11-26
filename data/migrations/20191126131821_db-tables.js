
exports.up = function(knex) {
    return knex.schema
        .createTable('Users', table => {
            table.increments();
            table.string('first_name', 128).notNullable();
            table.string('last_name', 128).notNullable();
            table.string('email', 128).notNullable().unique();
            table.string('password', 128).notNullable();
            table.string('role', 128).notNullable();
        })
        .createTable('')

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users');
};
