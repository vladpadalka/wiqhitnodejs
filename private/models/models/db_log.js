/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('db_log', {
    db_log_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    filename: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    execution_date: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'db_log'
  });
};
