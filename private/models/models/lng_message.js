/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('lng_message', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    language: {
      type: DataTypes.STRING(16),
      allowNull: false,
      primaryKey: true
    },
    translation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'lng_message'
  });
};
