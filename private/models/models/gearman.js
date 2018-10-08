/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('gearman', {
    unique_key: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    function_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    priority: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    data: {
      type: "LONGBLOB",
      allowNull: true
    },
    when_to_run: {
      type: DataTypes.BIGINT,
      allowNull: true
    }
  }, {
    tableName: 'gearman'
  });
};
