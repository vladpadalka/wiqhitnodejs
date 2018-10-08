/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rep_month_visits', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    visits: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    month: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }
  }, {
    tableName: 'rep_month_visits'
  });
};
