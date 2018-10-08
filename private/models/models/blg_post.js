/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('blg_post', {
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
    tags: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    status: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    create_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    update_time: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    author_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    category: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      defaultValue: '1'
    }
  }, {
    tableName: 'blg_post'
  });
};
