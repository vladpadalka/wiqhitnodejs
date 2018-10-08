/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('crn_monitor', {
    crn_monitor_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lastupdated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    action: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    memory_used: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'crn_monitor'
  });
};
