/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('for_topic', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    updated: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    sticky: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'for_topic'
  });
};
