/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rep_dates', {
    rep_dates_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    reporting_date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    update_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'rep_dates'
  });
};
