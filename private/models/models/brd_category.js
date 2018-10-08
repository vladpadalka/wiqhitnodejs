/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brd_category', {
    brd_category_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    }
  }, {
    tableName: 'brd_category'
  });
};
