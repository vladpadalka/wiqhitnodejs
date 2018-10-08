/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blg_user', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    username: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    password: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    profile: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'blg_user'
  });
};
