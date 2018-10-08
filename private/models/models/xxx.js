/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('xxx', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'xxx'
  });
};
