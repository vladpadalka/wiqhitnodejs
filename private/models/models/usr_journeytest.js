/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_journeytest', {
    journeytest_id: {
      type: DataTypes.STRING(32),
      allowNull: false,
      primaryKey: true
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    expire: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    pfl_personalization_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    pfl_segment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'usr_journeytest'
  });
};
