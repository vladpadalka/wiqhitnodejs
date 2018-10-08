/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_proposal', {
    acc_proposal_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    acc_contract_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    prd_product_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    storage_month: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    payment_plan: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    immediate_upgrade: {
      type: DataTypes.INTEGER(4).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    },
    domain: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    creation_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    seoshop_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    seoshop_token: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    seoshop_language: {
      type: DataTypes.STRING(2),
      allowNull: false
    }
  }, {
    tableName: 'acc_proposal'
  });
};
