
exports.seed = function(knex) {
  return knex('Projects').truncate()
    .then(function () {
      return knex('Projects').insert([
        {
          project_name: 'Better_professor'
        },
        {
          project_name: 'Bookr'
        },
        {
          project_name: 'Tabless_Thursday'
        },
        {
          project_name: 'Friend_Finder'
        },
        {
          project_name: 'Nany_Scheduler'
        },
        {
          project_name: 'Essentialism'
        }
      ]);
    });
};
