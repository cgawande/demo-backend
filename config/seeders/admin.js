const userTable = 'users';

module.exports = {
  up: async (queryInterface) => {
    try {
      let adminId = null;
      adminId = await queryInterface.rawSelect(
        userTable,
        {
          where: {
            email: 'karan13e@gmail.com',
           id: 50,
          },
        },
        ['id']
      );
      if (!adminId) {
        adminId = await queryInterface.bulkInsert(
          userTable,
          [
           { "role": "user",
            "status": "active",
            "id": 50,
            "first_name": "karan",
            "last_name": "kamble",
            "email": "karan@gmail.com",
            "password": "$2a$10$9jkIfIDZ.oItF9ZVpn/UV.yQLOzapmC6v6nv2h6AVUgD6sRemzG6O",
            "updated_at": "2023-04-25T05:22:40.699Z",
            "created_at": "2023-04-25T05:22:40.699Z"
          }
          ],
          {}
        );
      }
    } catch (err) {
      console.log(err, 'Seeder error');
    }
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete(userTable, null, {
      truncate: true,
      cascade: true,
    });
  },
};