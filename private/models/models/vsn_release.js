/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vsn_release', {
    releasenumber: {
      type: DataTypes.STRING(10),
      allowNull: false,
      primaryKey: true
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    release_type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    is_released: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'vsn_release'
  });
};
