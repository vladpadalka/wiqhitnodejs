/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_condition_default', {
    acc_condition_default_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    pfl_operator_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: true
    },
    number_of_times: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    number_of_periods: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    period: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'acc_condition_default'
  });
};
