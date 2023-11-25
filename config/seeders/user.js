module.exports = {
    up: async (queryInterface, Sequelize)=> {
    await queryInterface.sequelize.query('UPDATE `users`  SET `users`.`isPass` = 0 WHERE `users`.`id`=50;')
    },
  
    down: async (queryInterface, Sequelize) =>{
     await queryInterface.sequelize.query('UPDATE `users`  SET `users`.`isPass` = 1 WHERE `users`.`id`=50;')
    }
  };

//   const records = [
//     { id: 1, field_name: 'field value' },
//     { id: 2, field_name: 'field value' },
//     { id: 3, field_name: 'field value' },
// ];

// module.exports = {
//  up: function(queryInterface, Sequelize) {
//    const promises = records.map((r) => queryInterface.sequelize.query(`
//      UPDATE table_name
//      SET field_name = :field_name
//      WHERE id = :id
//    `, {
//        replacements: r
//    });

//    return Promise.all(promises);
//  },

//  //.....
// };