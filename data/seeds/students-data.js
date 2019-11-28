
exports.seed = function(knex) {
  return knex('Students').truncate()
    .then(function () {
      return knex('Students').insert([
        {
          first_name: 'Karim', 
          last_name: 'Bertacche'
        },
        {
          first_name: 'Nikol', 
          last_name: 'Giuliani'
        },
        {
          first_name: 'Zainab', 
          last_name: 'Angel'
        },
        {
          first_name: 'Martin', 
          last_name: 'TheGreat'
        },
        {
          first_name: 'Malcom', 
          last_name: 'X'
        },
        {
          first_name: 'Nikola', 
          last_name: 'Tesla'
        }
      ]);
    });
};
