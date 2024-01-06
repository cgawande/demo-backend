const { Op } = require("sequelize");
const config = require("../../config/index.js");
const utility = require("../../utils/index.js");
const { dataManipulate } = require("../../utils/index.js");
module.exports = (sequelize, DataTypes) => {
  const Transaction = sequelize.define(
    "Transaction",
    {
      paymentId: {
        type: DataTypes.STRING(100),
      },
      userId: {
        type: DataTypes.INTEGER,
      },
      amount: {
        type: DataTypes.INTEGER,
      },
      orderId: {
        type: DataTypes.STRING(255),
      },
      chargeAmount:{
        type: DataTypes.INTEGER,
      },
      status: {
        type: DataTypes.ENUM("pending", "completed", "cancel", "failed"),
        defaultValue: "pending",
      },
      type: {
        type: DataTypes.ENUM("credit", "debit", "other"),
        defaultValue: "other",
      },
      note: {
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

  Transaction.loadScopes = () => {
    Transaction.addScope("completed", {
      where: {
        status: "completed",
      },
    });
    Transaction.addScope("cancel", {
      where: {
        status: "cancel",
      },
    });

    Transaction.addScope("failedTransaction", {
      where: {
        status: "failed",
      },
    });

    Transaction.addScope("pending", {
      where: {
        status: "pending",
      },
    });

    Transaction.addScope("allTransaction", {
      where: {
        status: { [Op.in]: ["pending", "completed", "cancel", "failed"] },
      },
    });
  };

  Transaction.associate = (models) => {
    Transaction.belongsTo(models.User, {
      foreignKey: "userId",
    });
  };
  return Transaction;
};
