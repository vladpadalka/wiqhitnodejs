/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('api_accesstokens', {
    access_token: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    expires: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    },
    scope: {
      type: DataTypes.STRING(2000),
      allowNull: true
    }
  }, {
    tableName: 'api_accesstokens'
  });
};
