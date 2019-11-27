
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
            table.string('timestamp').defaultTo(JSON.stringify(new Date()));
            table.integer('user_id').unsigned().notNullable().reference('id').inTable('Users');
            table.integer('student_id').unsigned().notNullable().reference('id').inTable('Students');
            table.boolean('send_to_self')..defaultTo(false).notNullable();
        })
        .createTable('Students_&_Users', table => {
            table.integer('student_id').unsigned().notNullable().reference('id').inTable('Students');
            table.integer('user_id').unsigned().notNullable().reference('id').inTable('Users');
            table.primary(['student_id', 'user_id']);
        })
        .createTable('Students_&_Projects', table => {
            table.integer('student_id').unsigned().notNullable().reference('id').inTable('Students');
            table.integer('project_id').unsigned().notNullable().reference('id').inTable('Projects');
            table.primary(['student_id', 'project_id']);
        })
        .createTable('Projects_&_Deadlines', table => {
            table.integer('project_id').unsigned().notNullable().reference('id').inTable('Projects');
            table.string('deadline', 128).notNullable();
            table.string('deadline_type', 128).notNullable();
            table.primary(["deadline_type", "project_id", "deadline"]);
        })
};

exports.down = function(knex) {
  return knex.schema
    .dropTableIfExists('Users')
    .dropTableIfExists('Projects')
    .dropTableIfExists('Messages')
    .dropTableIfExists("Students_&_Users")
    .dropTableIfExists("Students_&_Projects")
    .dropTableIfExists("Projects_&_Deadlines");
};
