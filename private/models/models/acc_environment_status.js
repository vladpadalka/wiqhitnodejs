/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_environment_status', {
    acc_environment_status_id: {
      type: DataTypes.INTEGER(1).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    environment_status: {
      type: DataTypes.STRING(20),
      allowNull: false
    }
  }, {
    tableName: 'acc_environment_status'
  });
};
