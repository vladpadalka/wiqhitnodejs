/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crn_schedule', {
    crn_schedule_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    interval: {
      type: DataTypes.STRING(20),
      allowNull: false,
      defaultValue: 'monthly'
    },
    day_of_week: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    day: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    hour: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    minute: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    job_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    is_active: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    last_run: {
      type: DataTypes.DATE,
      allowNull: false
    },
    lastupdated: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'crn_schedule'
  });
};
