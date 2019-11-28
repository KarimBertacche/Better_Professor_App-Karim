const bcrypt = require('bcryptjs');

exports.seed = function(knex) {
  return knex('Users').truncate()
    .then(function () {
      return knex('Users').insert([
        {
          first_name: 'Karim', 
          last_name: 'Bertacche', 
          email: 'karim@live.com',
          password: bcrypt.hashSync('This23rtisga4ra49tvery42t024longass248password')
        },
        {
          first_name: 'Martin Twum', 
          last_name: 'Mensah', 
          email: 'twum@live.com',
          password: bcrypt.hashSync('thir23r23ris24rmore42r2of2r23rthe2r2saqme')
        },
        {
          first_name: 'Benjamin', 
          last_name: 'Grabow', 
          email: 'ben@live.com',
          password: bcrypt.hashSync('promoregamise842tthis23r23is29rd%*&the1rlast2408r&*one')
        },
        {
          first_name: 'Rory', 
          last_name: 'Flint', 
          email: 'flint@live.com',
          password: bcrypt.hashSync('super983yr08duper283ru2utpassweord0248tuR*&%yeah42308!!428hv')
        },
        {
          first_name: 'Yusuf', 
          last_name: 'AbdulKarim', 
          email: 'yusuf@live.com',
          password: bcrypt.hashSync('bleafbvo32rbvasdyeah7*%*(^vnau7y9afHEll08rqugvsa8w4bOMGgeuv80')
        },
        {
          first_name: 'Gabriel', 
          last_name: 'Cabrejas', 
          email: 'gabriel@live.com',
          password: bcrypt.hashSync('eggcellent326rty^&((&*vyou438tyare384t8^R*&^)the0824Best483Instructor!!')
        }
      ]);
    });
};
