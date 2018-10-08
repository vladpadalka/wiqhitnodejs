/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blg_lookup', {
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
    code: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    type: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    position: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'blg_lookup'
  });
};
