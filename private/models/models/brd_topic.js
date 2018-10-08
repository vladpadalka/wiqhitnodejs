/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brd_topic', {
    brd_topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brd_forum_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    topic_title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    lastupdated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    last_poster_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    last_poster_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    last_post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    replies: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    views: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    sticky: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    votes: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    has_answer: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'brd_topic'
  });
};
