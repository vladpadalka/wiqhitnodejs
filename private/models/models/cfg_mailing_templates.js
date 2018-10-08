/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cfg_mailing_templates', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    lang: {
      type: DataTypes.STRING(2),
      allowNull: true
    },
    mailing_type: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    hellodialog_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'cfg_mailing_templates'
  });
};
