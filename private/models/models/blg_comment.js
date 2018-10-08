/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blg_comment', {
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
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    author: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(128),
      allowNull: false
    },
    url: {
      type: DataTypes.STRING(128),
      allowNull: true
    },
    post_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      references: {
        model: 'blg_post',
        key: 'id'
      }
    }
  }, {
    tableName: 'blg_comment'
  });
};
