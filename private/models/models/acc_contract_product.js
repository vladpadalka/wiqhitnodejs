/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_contract_product', {
    acc_contract_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    prd_product_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_base: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'acc_contract_product'
  });
};
