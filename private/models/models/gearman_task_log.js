/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gearman_task_log', {
    unique_key: {
      type: DataTypes.STRING(255),
      allowNull: false,
      primaryKey: true
    },
    function_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    data: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    result: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    started: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    completed: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    scheduled: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'gearman_task_log'
  });
};
