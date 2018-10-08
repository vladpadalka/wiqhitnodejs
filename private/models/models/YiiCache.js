/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('YiiCache', {
    id: {
      type: DataTypes.CHAR(128),
      allowNull: false,
      primaryKey: true
    },
    expire: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    value: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'YiiCache'
  });
};
