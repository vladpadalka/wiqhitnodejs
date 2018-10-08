/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('dmr_profiles_goals', {
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
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    pfl_personalization_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    prs_profiles: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    ctg_profiles: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    var1_profiles: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var2_profiles: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var3_profiles: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var4_profiles: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var5_profiles: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    prs_clickthrough: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    ctg_clickthrough: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var1_clickthrough: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var2_clickthrough: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var3_clickthrough: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var4_clickthrough: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    var5_clickthrough: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'dmr_profiles_goals'
  });
};
