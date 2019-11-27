
exports.up = function(knex) {
  return knex.schema
    .createTable('Students_&_Users', table => {
        table.integer('student_id').unsigned().notNullable().references('id').inTable('Students');
        table.integer('user_id').unsigned().notNullable().references('id').inTable('Users');
        table.primary(['student_id', 'user_id']);
    })
    .createTable('Students_&_Projects', table => {
        table.integer('student_id').unsigned().notNullable().references('id').inTable('Students');
        table.integer('project_id').unsigned().notNullable().references('id').inTable('Projects');
        table.primary(['student_id', 'project_id']);
    })
    .createTable('Projects_&_Deadlines', table => {
        table.integer('project_id').unsigned().notNullable().references('id').inTable('Projects');
        table.string('deadline', 128).notNullable();
        table.string('deadline_type', 128).notNullable();
        table.primary(["deadline_type", "project_id", "deadline"]);
    })
};

exports.down = function(knex) { 
    return knex.schema
        .dropTableIfExists("Students_&_Users")
        .dropTableIfExists("Students_&_Projects")
        .dropTableIfExists("Projects_&_Deadlines");
};
