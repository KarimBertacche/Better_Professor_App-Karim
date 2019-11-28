
exports.seed = function(knex) {
  return knex('Messages').truncate()
    .then(function () {
      return knex('Messages').insert([
        {
          user_id: 1, 
          student_id: 1, 
          message: 'Hello world!', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 1, 
          student_id: 2, 
          message: 'Some random text', 
          send_to_self: '0', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 1, 
          student_id: 3, 
          message: 'Let\'s do it bro!!', 
          send_to_self: '0', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 1, 
          student_id: 4, 
          message: 'This is just another random message 😑', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 2, 
          student_id: 3, 
          message: 'Alright, alright, alright 🤠', 
          send_to_self: '0', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 2, 
          student_id: 4, 
          message: 'So, this is a note to me self', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 2, 
          student_id: 5, 
          message: 'I will be a great dev!!💪🏽', 
          send_to_self: '0', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 3, 
          student_id: 3, 
          message: 'Hello there 👋🏽😁! Me new user', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        }
      ]);
    });
};
