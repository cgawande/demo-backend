const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");
module.exports = (sequelize, DataTypes) => {
    const AssignProduct = sequelize.define(
        "AssignProduct",
        {
            productId: {
                type: DataTypes.INTEGER,
            },
            userId: {
                type: DataTypes.INTEGER,
            },
            Remark: {
                type: DataTypes.STRING(255),
            },
            message: {
                type: DataTypes.STRING(305),
            },
            status: {
                type: DataTypes.ENUM("pending", "completed",),
                defaultValue: "pending",
            },
        },
        {
            underscored: true,
        }
    );

    AssignProduct.loadScopes = () => {
        AssignProduct.addScope("completed", {
            where: {
                status: "completed",
            },
        });
    };

    AssignProduct.associate = (models) => {
        AssignProduct.belongsTo(models.User, {
            foreignKey: "userId",
        });

        AssignProduct.belongsTo(models.Product, {
            foreignKey: "productId",
        });
    };
    return AssignProduct;
};
