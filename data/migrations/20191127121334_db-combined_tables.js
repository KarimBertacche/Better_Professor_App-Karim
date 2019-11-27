
exports.up = function(knex) {
  return knex.schema
    .createTable('Students_&_Users', table => {
        table.primary(['student_id', 'user_id']);
        table.integer('student_id').unsigned().notNullable().references('id').inTable('Students')
            .onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('user_id').unsigned().notNullable().references('id').inTable('Users')
            .onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('Students_&_Projects', table => {
        table.primary(['student_id', 'project_id']);
        table.integer('student_id').unsigned().notNullable().references('id').inTable('Students')
            .onUpdate('CASCADE').onDelete('CASCADE');
        table.integer('project_id').unsigned().notNullable().references('id').inTable('Projects')
            .onUpdate('CASCADE').onDelete('CASCADE');
    })
    .createTable('Projects_&_Deadlines', table => {
        table.primary(["deadline_type", "project_id", "deadline"]);
        table.integer('project_id').unsigned().notNullable().references('id').inTable('Projects')
            .onUpdate('CASCADE').onDelete('CASCADE');
        table.string('deadline', 128).notNullable();
        table.string('deadline_type', 128).notNullable();
    })
};

exports.down = function(knex) { 
    return knex.schema
        .dropTableIfExists("Students_&_Users")
        .dropTableIfExists("Students_&_Projects")
        .dropTableIfExists("Projects_&_Deadlines");
};
