/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cfg_hierarchy', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pagetype: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    matchtype: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    accountid: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'cfg_hierarchy'
  });
};
