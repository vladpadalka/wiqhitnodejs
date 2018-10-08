/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_contract_product_discount', {
    prd_product_ids: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    discount_ratio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'acc_contract_product_discount'
  });
};
