
exports.seed = function(knex) {
  return knex('Students_&_Users').truncate()
    .then(function () {
      return knex('Students_&_Users').insert([
        {
          user_id: 1, 
          student_id: 4
        },
        {
          user_id: 2,
          student_id: 3
        },
        {
          user_id: 4,
          student_id: 4
        },
        {
          user_id: 2,
          student_id: 1
        },
        {
          user_id: 2,
          student_id: 5
        },
        {
          user_id: 3,
          student_id: 6
        }
      ]);
    });
};
