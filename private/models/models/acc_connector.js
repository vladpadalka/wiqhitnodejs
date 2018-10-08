/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_connector', {
    acc_connector_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    connector: {
      type: "BLOB",
      allowNull: true
    },
    host: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '127.0.0.1'
    },
    port: {
      type: DataTypes.INTEGER(6),
      allowNull: false,
      defaultValue: '3306'
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true,
      defaultValue: '0'
    },
    clu_cluster_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'acc_connector'
  });
};
