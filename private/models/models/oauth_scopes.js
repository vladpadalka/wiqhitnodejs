/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('oauth_scopes', {
    scope: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    is_default: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    }
  }, {
    tableName: 'oauth_scopes'
  });
};
