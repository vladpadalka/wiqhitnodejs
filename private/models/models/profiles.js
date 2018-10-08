/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('profiles', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    }
  }, {
    tableName: 'profiles'
  });
};
