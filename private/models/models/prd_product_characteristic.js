/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prd_product_characteristic', {
    prd_product_characteristic_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
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
    tableName: 'prd_product_characteristic'
  });
};
