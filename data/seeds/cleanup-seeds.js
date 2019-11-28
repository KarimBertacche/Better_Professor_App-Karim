const cleaner = require('knex-cleaner');

exports.seed = function(knex) {
  return knex('Messages').truncate()
    .then(() => {
      return knex('Projects_&_Deadlines').truncate()
        .then(() => {
          return knex('Students_&_Projects').truncate()
            .then(() => {
              return knex('Students_&_Users').truncate()
                .then(() => {
                  return cleaner.clean(knex, {
                    mode: 'truncate',
                    restartIdentity: true, // Used to tell PostgresSQL to reset the ID counter
                    ignoreTables: ['knex_migrations', 'knex_migrations_lock'],
                  });
                });
            });
        });
    });
};
