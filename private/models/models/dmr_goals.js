/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dmr_goals', {
    rep_dates_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    period: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '0'
    },
    cfg_rule_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    pfl_personalization_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    prs_goals: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ctg_goals: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    prs_ordertotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    ctg_ordertotal: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      defaultValue: '0.00'
    },
    var1_goals: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var2_goals: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var3_goals: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var4_goals: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var5_goals: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var1_ordertotal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var2_ordertotal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var3_ordertotal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var4_ordertotal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var5_ordertotal: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'dmr_goals'
  });
};
