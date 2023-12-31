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
    PermissionRole.belongsTo(models.Permission, {
      foreignKey: "permissionId",
      onDelete: 'cascade',
    });
    PermissionRole.belongsTo(models.User, {
      foreignKey: "userId",
      onDelete: 'cascade',
    });
  };
  return PermissionRole;
};
