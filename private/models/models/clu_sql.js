/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clu_sql', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    host: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    cluster_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    port: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      defaultValue: '3306'
    }
  }, {
    tableName: 'clu_sql'
  });
};
