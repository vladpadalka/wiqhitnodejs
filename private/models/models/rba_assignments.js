/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rba_assignments', {
    itemname: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rba_items',
        key: 'name'
      }
    },
    userid: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true
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
    tableName: 'rba_assignments'
  });
};
