/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brd_votes_topic', {
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    brd_topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true
    },
    brd_forum_id: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      primaryKey: true
    },
    votes: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    }
  }, {
    tableName: 'brd_votes_topic'
  });
};
