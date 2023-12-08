const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define(
    "Permission",
    {
      name: {
        type: DataTypes.STRING(100),
      },
      status: {
        type: DataTypes.ENUM("active", "inactive"),
        defaultValue: "active",
      },
    },
    {
      underscored: true,
    }
  );

  Permission.loadScopes = () => {};

  Permission.associate = (models) => {
    // Permission.hasMany(models.PermissionRole, {
    //   foreignKey: "permissionId",
    // });
  };
  return Permission;
};
