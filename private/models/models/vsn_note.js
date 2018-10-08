/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('vsn_note', {
    vsn_note_id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    note_date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '2014-01-01'
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    vsn_category_id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'vsn_note'
  });
};
