/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rba_items', {
    name: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bizrule: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    data: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'rba_items'
  });
};
