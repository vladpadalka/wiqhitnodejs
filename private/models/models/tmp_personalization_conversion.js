/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tmp_personalization_conversion', {
    pfl_personalization_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    cg: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    profile_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    visits: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    day: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  }, {
    tableName: 'tmp_personalization_conversion'
  });
};
