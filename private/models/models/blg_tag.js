/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blg_tag', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    frequency: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'blg_tag'
  });
};
