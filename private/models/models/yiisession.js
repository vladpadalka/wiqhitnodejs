/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('yiisession', {
    id: {
      type: DataTypes.CHAR(32),
      allowNull: false,
      primaryKey: true
    },
    expire: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    data: {
      type: "LONGBLOB",
      allowNull: true
    }
  }, {
    tableName: 'yiisession'
  });
};
