/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('for_category', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(200),
      allowNull: true
    },
    position: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    }
  }, {
    tableName: 'for_category'
  });
};
