/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pay_subscription', {
    pay_subscription_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    inner_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    outer_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      unique: true
    },
    mode: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    created_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    times: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    interval: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    cancelled_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    start_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    error: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'pay_subscription'
  });
};
