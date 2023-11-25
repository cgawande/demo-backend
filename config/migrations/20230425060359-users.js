'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all([
      queryInterface.changeColumn('users', 'isPass', {
        type: Sequelize.BOOLEAN,
        allowNull: false
      }),
    ]);
  },

  down: (queryInterface) => {
    return Promise.all([queryInterface.changeColumn('users', 'isPass')]);
  },
};