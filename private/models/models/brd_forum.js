/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brd_forum', {
    brd_forum_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brd_category_id: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    forum_name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    forum_description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    topics: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    posts: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    priority: {
      type: DataTypes.INTEGER(2),
      allowNull: false
    },
    last_post_id: {
      type: DataTypes.INTEGER(8),
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
    last_post_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    customer_voice: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    }
  }, {
    tableName: 'brd_forum'
  });
};
