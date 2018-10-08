/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('location', {
    location_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    location_name: {
      type: DataTypes.STRING(45),
      allowNull: true
    }
  }, {
    tableName: 'location'
  });
};
