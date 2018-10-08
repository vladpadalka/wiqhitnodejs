/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_contract_product_characteristic', {
    acc_contract_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    prd_product_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    characteristic_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    characteristic_value: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'acc_contract_product_characteristic'
  });
};
