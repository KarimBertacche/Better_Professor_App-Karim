
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
        .createTable('Projects', table => {
            table.increments();
            table.string('project_name', 128);
        })
        .createTable('Messages', table => {
            table.increments();
            table.string('timestamp').defaultTo(JSON.stringify(new Date()));
            table.integer('user_id').unsigned().notNullable().reference('id').inTable('users');
        })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('Users');
};
