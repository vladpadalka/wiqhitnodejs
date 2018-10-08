/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_access_tokens', {
    access_token: {
      type: DataTypes.STRING(40),
      allowNull: false,
      primaryKey: true
    },
    client_id: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    user_id: {
      type: DataTypes.STRING(255),
      allowNull: true
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
    tableName: 'oauth_access_tokens'
  });
};
