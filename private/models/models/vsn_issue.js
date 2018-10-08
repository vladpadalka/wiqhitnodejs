/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vsn_issue', {
    vsn_issue_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    issue_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    release_number: {
      type: DataTypes.STRING(10),
      allowNull: false
    }
  }, {
    tableName: 'vsn_issue'
  });
};
