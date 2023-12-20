const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");
module.exports = (sequelize, DataTypes) => {
  const ProductMedia = sequelize.define(
    "ProductMedia",
    {
      productId: {
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING(255),
      },
      basePath: {
        type: DataTypes.TEXT,
      },
      baseUrl: {
        type: DataTypes.TEXT,
      },
    },
    {
      underscored: true,
    }
  );

  ProductMedia.loadScopes = () => {
  };

  ProductMedia.associate = (models) => {
    ProductMedia.belongsTo(models.Product, {
      foreignKey: "productId",
      onDelete: 'cascade',
    });
  };
  return ProductMedia;
};
