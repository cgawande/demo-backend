const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");

const defaultUserImage = `${config.app.baseUrl}public/default-images/defaultImage.png`;
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    "User",
    {
      fullName: {
        type: DataTypes.STRING(100),
      },
      cscId:{
        type: DataTypes.STRING(100),
      },
      email: {
        type: DataTypes.STRING(100),
      },
      phoneNumber: {
        type: DataTypes.STRING(16),
      },
      password: {
        type: DataTypes.STRING(255),
      },
      token: {
        type: DataTypes.STRING(500),
      },
      wallet:{
        type:DataTypes.INTEGER,
        defaultValue:0
      },
      role: {
        type: DataTypes.ENUM("user", "sub-admin", "admin"),
        defaultValue: "user",
      },
      isOnline: {
        type: DataTypes.TINYINT(1),
        defaultValue: 0,
      },
      profilePicture: {
        type: DataTypes.STRING(255),
        set(val) {
          let tmpStr = val;
          tmpStr = tmpStr ? tmpStr.replace(/\\/g, "/") : null;
          this.setDataValue("profilePicture", tmpStr);
        },
      },
      profilePictureUrl: {
        type: DataTypes.VIRTUAL,
        get() {
          const str = this.get("profilePicture");
          return utility.getImage(str, defaultUserImage, "public", false);
        },
      },
      status: {
        type: DataTypes.ENUM("active", "inactive", "deleted"),
        defaultValue: "active",
      },
      createdById: {
        type: DataTypes.INTEGER,
      },
      updatedById: {
        type: DataTypes.INTEGER,
      },
      deletedById: {
        type: DataTypes.INTEGER,
      },
    },
    {
      underscored: true,
    }
  );

  // User.addHook("afterFind", (findResult) => dataManipulate("User", findResult));

  User.loadScopes = () => {
    User.addScope("basic", {
      where: {
        status: "active",
      },
      attributes: {
        exclude: ["password", "token"],
      },
    });
    User.addScope("activeUser", {
      where: {
        status: "active",
      },
      attributes: {
        exclude: ["password", "token"],
      },
    });

    User.addScope("notDeletedUser", {
      where: {
        status: { [Op.ne]: "deleted" },
      },
      attributes: {
        exclude: ["password", "token"],
      },
    });
    User.addScope("inactive", {
      where: {
        status: "inactive",
      },
      attributes: {
        exclude: ["password", "token"],
      },
    });
    User.addScope("deletedUser", {
      attributes: {
        exclude: ["password", "token"],
      },
    });
    User.addScope("allStore", {
      where: {
        status: { [Op.in]: ["active", "inactive", "deleted"] },
      },
      attributes: {
        exclude: ["password","token"],
      },
    });
  };

  User.associate = (models) => {
    User.hasMany(models.Transaction, {
      foreignKey: "userId",
    });
    // User.hasMany(models.PermissionRole, {
    //   foreignKey: "userId",
    // });
    // User.hasMany(models.ProviderService, {
    //   foreignKey: 'userId',
    //   onUpdate: 'cascade',
    //   onDelete: 'cascade',
    // });

    // User.hasOne(models.Store, {
    //   foreignKey: 'userId',
    //   onUpdate: 'cascade',
    //   onDelete: 'cascade',
    // });
  };
  return User;
};
