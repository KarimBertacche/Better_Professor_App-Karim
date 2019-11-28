
exports.seed = function(knex) {
  return knex('Projects_&_Deadlines').truncate()
    .then(function () {
      return knex('Projects_&_Deadlines').insert([
        {
          project_id: 1, 
          deadline_type: 'definite', 
          deadline: JSON.stringify(new Date('2020-03-09')), 
        },
        {
          project_id: 2, 
          deadline_type: 'definite', 
          deadline: JSON.stringify(new Date('2019-12-09')), 
        },
        {
          project_id: 3, 
          deadline_type: 'temporary',
          deadline: JSON.stringify(new Date('2020-01-01')), 
        },
        {
          project_id: 1, 
          deadline_type: 'draft', 
          deadline: JSON.stringify(new Date('2019-11-28'))
        }
      ]);
    });
};
