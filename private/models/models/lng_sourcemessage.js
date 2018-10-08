/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lng_sourcemessage', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    category: {
      type: DataTypes.STRING(32),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'lng_sourcemessage'
  });
};
