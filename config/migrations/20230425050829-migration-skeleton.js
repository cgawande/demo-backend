'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'city', 'cities');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.renameColumn('users', 'isOnline', 'petName');
  }
};
