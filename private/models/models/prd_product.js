/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('prd_product', {
    prd_product_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    product_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    product_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    is_custom: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    prd_category_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    price_type: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    },
    product_alias: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'prd_product'
  });
};
