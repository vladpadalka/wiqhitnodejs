/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('brd_post', {
    brd_post_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    brd_topic_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(8),
      allowNull: false
    },
    post_content: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    is_answer: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'brd_post'
  });
};
