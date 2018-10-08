/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_contract_discount', {
    number_of_periods: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    discount_ratio: {
      type: DataTypes.DECIMAL,
      allowNull: false
    }
  }, {
    tableName: 'acc_contract_discount'
  });
};
