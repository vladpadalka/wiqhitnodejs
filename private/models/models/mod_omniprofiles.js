/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('mod_omniprofiles', {
    ipaddress: {
      type: "VARBINARY(16)",
      allowNull: false,
      primaryKey: true
    },
    is_business: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'mod_omniprofiles'
  });
};
