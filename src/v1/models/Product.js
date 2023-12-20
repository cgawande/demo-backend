const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");
module.exports = (sequelize, DataTypes) => {
  const Product = sequelize.define(
    "Product",
    {
     applicantName: {
        type: DataTypes.STRING(100),
      },
      applicantFatherName: {
        type: DataTypes.STRING(100),
      },
      DOB: {
        type: DataTypes.STRING(100),
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      address:{
        type: DataTypes.STRING(255)
      },
      enrollementNumber: {
        type: DataTypes.STRING(255),
      },
      status: {
        type: DataTypes.ENUM("pending","assigned","reCheck","completed", "cancel", "failed"),
        defaultValue: "pending",
      },
      type: {
        type: DataTypes.STRING(100),
      },
      updateType:{
        type: DataTypes.STRING(100),
      },
      paymentStatus:{
        type: DataTypes.ENUM("pending","completed", "cancel", "failed"),
        defaultValue: "pending",
      },
      isPaid:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      document:{
        type: DataTypes.STRING(255)
      },
      isDocumentVerified:{
        type: DataTypes.BOOLEAN,
        defaultValue:false
      },
      assignUser:{
        type: DataTypes.INTEGER,
      },
      Remark: {
        type: DataTypes.STRING(255),
      },
      message: {
        type: DataTypes.STRING(305),
      },
    },
    {
      underscored: true,
    }
  );

  Product.loadScopes = () => {
    Product.addScope("completed", {
      where: {
        status: "completed",
      },
    });
    Product.addScope("cancel", {
      where: {
        status: "cancel",
      },
    });

    Product.addScope("failedTransaction", {
      where: {
        status: "failed",
      },
    });

    Product.addScope("pending", {
      where: {
        status: "pending",
      },
    });

    Product.addScope("allTransaction", {
      where: {
        status: { [Op.in]: ["pending", "completed", "cancel", "failed"] },
      },
    });
  };

  Product.associate = (models) => {
    Product.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Product.belongsTo(models.User, {
        foreignKey: "assignUser",
      });
      Product.hasMany(models.ProductMedia, {
        foreignKey: "productId",
        onDelete: 'cascade',
      });
  };
  return Product;
};
