/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_stats', {
    acc_environment_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    access_token: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    calls: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    month_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      primaryKey: true
    },
    query_type: {
      type: DataTypes.STRING(50),
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'api_stats'
  });
};
