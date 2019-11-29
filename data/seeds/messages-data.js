
exports.seed = function(knex) {
  return knex('Messages').truncate()
    .then(function () {
      return knex('Messages').insert([
        {
          user_id: 1, 
          student_id: 1, 
          text: 'Hello world!', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 1, 
          student_id: 2, 
          text: 'Some random text', 
          send_to_self: '0', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 1, 
          student_id: 3, 
          text: 'Let\'s do it bro!!', 
          send_to_self: '0', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 1, 
          student_id: 4, 
          text: 'This is just another random text 😑', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 2, 
          student_id: 3, 
          text: 'Alright, alright, alright 🤠', 
          send_to_self: '0', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 2, 
          student_id: 4, 
          text: 'So, this is a note to me self', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        },
        {
          user_id: 3, 
          student_id: 3, 
          text: 'Hello there 👋🏽😁! Me new user', 
          send_to_self: '1', 
          timestamp: JSON.stringify(new Date())
        }
      ]);
    });
};
