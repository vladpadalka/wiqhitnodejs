/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('locationconnector', {
    locationconnector_id: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    host: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    port: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    location_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'locationconnector'
  });
};
