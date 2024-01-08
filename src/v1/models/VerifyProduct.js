const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");
module.exports = (sequelize, DataTypes) => {
    const VerifyProduct = sequelize.define(
        "VerifyProduct",
        {
            applicantName: {
                type: DataTypes.STRING(100),
            },
            phoneNumber:{
                type: DataTypes.STRING(100),
            },
            adharUpdateDetails: {
                type: DataTypes.STRING(250),
            },
            userId: {
                type: DataTypes.INTEGER,
            },
            address: {
                type: DataTypes.STRING(255)
            },
            enrollementNumber: {
                type: DataTypes.STRING(255),
            },
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
        },
        {
            underscored: true,
        }
    );

    VerifyProduct.loadScopes = () => {
        VerifyProduct.addScope("completed", {
            where: {
                status: "completed",
            },
        });
    };

    VerifyProduct.associate = (models) => {
        VerifyProduct.belongsTo(models.User, {
            foreignKey: "userId",
        });

        VerifyProduct.belongsTo(models.Product, {
            foreignKey: "productId",
        });
    };
    return VerifyProduct;
};
