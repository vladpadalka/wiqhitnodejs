/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('def_locked_ips', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ip: {
      type: DataTypes.STRING(45),
      allowNull: false
    },
    time: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'def_locked_ips'
  });
};
