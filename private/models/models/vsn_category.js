/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vsn_category', {
    vsn_category_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    tableName: 'vsn_category'
  });
};
