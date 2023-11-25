let tableModel = {  tableName: 'users' };

let data= [
  { first_name: 'Nethers', email: 'Amster@gmsil.com' },
  { first_name: 'German', email: 'Berlin@gmail.com' },
  { first_name: 'karan', email: 'karan@gmail.com' },
]
module.exports = {
  
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(tableModel, data, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(tableModel, data, {});
  }
};
