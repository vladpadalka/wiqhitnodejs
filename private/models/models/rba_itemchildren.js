/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('rba_itemchildren', {
    parent: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rba_items',
        key: 'name'
      }
    },
    child: {
      type: DataTypes.STRING(64),
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'rba_items',
        key: 'name'
      }
    }
  }, {
    tableName: 'rba_itemchildren'
  });
};
