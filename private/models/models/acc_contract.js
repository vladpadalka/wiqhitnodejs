/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_contract', {
    acc_contract_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    current_visits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    v_01: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_02: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_03: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_04: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_05: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_06: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_07: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_08: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_09: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_10: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_11: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    v_12: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    month: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    storage_month: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    mod_omniprofiles: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    next_payment_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    prd_product_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    paypal_profile_id: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    contract_status: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    period_discount_ratio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    product_discount_ratio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    last_pay_payment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    prev_acc_contract_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    },
    transition_type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    upgrade_price: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    pay_subscription_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: true
    }
  }, {
    tableName: 'acc_contract'
  });
};
