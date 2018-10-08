/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cl_component_category', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'cl_component_category'
  });
};
