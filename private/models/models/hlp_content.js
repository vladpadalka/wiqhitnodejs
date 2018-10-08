/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('hlp_content', {
    hlp_content_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    hlp_data_name: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    hlp_data_title: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    hlp_data_content: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    hlp_data_location: {
      type: DataTypes.STRING(80),
      allowNull: false
    }
  }, {
    tableName: 'hlp_content'
  });
};
