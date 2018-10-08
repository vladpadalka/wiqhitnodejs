/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tck_attachment', {
    tck_attachment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tck_message_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    filename: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    file: {
      type: "BLOB",
      allowNull: false
    }
  }, {
    tableName: 'tck_attachment'
  });
};
