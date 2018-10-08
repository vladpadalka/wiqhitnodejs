/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crn_log', {
    crn_log_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cronjob: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    job_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    duration: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'crn_log'
  });
};
