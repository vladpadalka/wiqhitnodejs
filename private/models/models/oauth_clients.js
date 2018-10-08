/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_clients', {
    client_id: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    client_secret: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    redirect_uri: {
      type: DataTypes.STRING(2000),
      allowNull: false
    },
    grant_types: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    scope: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    user_id: {
      type: DataTypes.STRING(80),
      allowNull: true
    }
  }, {
    tableName: 'oauth_clients'
  });
};
