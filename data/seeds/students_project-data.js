
exports.seed = function(knex) {
  return knex('Students_&_Projects').truncate()
    .then(function () {
      return knex('Students_&_Projects').insert([
        {
          student_id: 3, 
          project_id: 3
        },
        {
          student_id: 5, 
          project_id: 4
        },
        {
          student_id: 6, 
          project_id: 1
        }, 
        {
          student_id: 2, 
          project_id: 4
        },
        {
          student_id: 1, 
          project_id: 1
        },
      ]);
    });
};
