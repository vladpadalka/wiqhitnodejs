/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geo_blocks', {
    startIpNum: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    endIpNum: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    locId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'geo_blocks'
  });
};
