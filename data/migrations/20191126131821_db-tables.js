
exports.up = function(knex) {
    return knex.schema
        .createTable('Users', table => {
            table.increments();
            table.string('first_name', 128).notNullable();
            table.string('last_name', 128).notNullable();
            table.string('email', 128).notNullable().unique();
            table.string('password', 128).notNullable();
        })
        .createTable('Students', table => {
            table.increments();
            table.string('first_name', 128).notNullable();
            table.string('last_name', 128).notNullable();
        })
        .createTable('Projects', table => {
            table.increments();
            table.string('project_name', 128).notNullable();
        })
        .createTable('Messages', table => {
            table.increments();
            table.string('timestamp', 128).defaultTo(JSON.stringify(new Date()));
            table.integer('user_id').unsigned().notNullable().references('id').inTable('Users')
                .onUpdate('CASCADE').onDelete('CASCADE');
            table.integer('student_id').unsigned().notNullable().references('id').inTable('Students')
                .onUpdate('CASCADE').onDelete('CASCADE');
            table.boolean('send_to_self').defaultTo(false).notNullable();
        });
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Users')
    .dropTableIfExists('Students')
    .dropTableIfExists('Projects')
    .dropTableIfExists('Messages');
};
