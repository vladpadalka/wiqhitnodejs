/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('users_environments', {
    users_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    environment_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    default_environment: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'users_environments'
  });
};
