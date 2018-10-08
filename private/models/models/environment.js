/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('environment', {
    environment_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    environment_name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    db_name: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    location_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    environment_hash: {
      type: DataTypes.STRING(50),
      allowNull: false
    }
  }, {
    tableName: 'environment'
  });
};
