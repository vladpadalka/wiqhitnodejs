/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('for_comment', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    userid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    created: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    updated: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    topicid: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    }
  }, {
    tableName: 'for_comment'
  });
};
