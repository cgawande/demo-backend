module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn('Users', 'userblogs', {
          type: Sequelize.DataTypes.STRING
        }, { transaction: t }),
        // queryInterface.addColumn('Users', 'favoriteColor', {
        //   type: Sequelize.DataTypes.STRING,
        // }, { transaction: t })
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('Users', 'isPass', { transaction: t }),

      ]);
    });
  }
};