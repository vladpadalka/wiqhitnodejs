/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rep_personalizations_conversion', {
    rep_conversion_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    pfl_personalization_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    first_visit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    second_visit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    third_visit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    more_visit: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cg: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'rep_personalizations_conversion'
  });
};
