/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prd_product_category', {
    prd_category_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'prd_product_category'
  });
};
