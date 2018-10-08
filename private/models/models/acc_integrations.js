/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_integrations', {
    acc_integrations_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    integration_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    api_key: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    api_signature: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    extravar1: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    extravar2: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'acc_integrations'
  });
};
