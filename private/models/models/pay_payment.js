/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pay_payment', {
    pay_payment_id: {
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
    paid_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    amount: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    method: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    details: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    recurring_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    callback_onpaid: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    error: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'pay_payment'
  });
};
