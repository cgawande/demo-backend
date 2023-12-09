const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");
module.exports = (sequelize, DataTypes) => {
  const PermissionRole = sequelize.define(
    "PermissionRole",
    {
      permissionId: {
        type: DataTypes.INTEGER,
      },
      userId: {
        type: DataTypes.INTEGER,
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

  PermissionRole.loadScopes = () => {};

  PermissionRole.associate = (models) => {
    PermissionRole.hasMany(models.Permission, {
      foreignKey: "permissionId",
    });
    PermissionRole.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return PermissionRole;
};
