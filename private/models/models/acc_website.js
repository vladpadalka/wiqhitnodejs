/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_website', {
    acc_website_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    website: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'acc_website'
  });
};
