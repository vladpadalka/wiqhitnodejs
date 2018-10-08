/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cl_component', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    category_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    tags: {
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: ''
    },
    preview: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    thumbnails: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    config: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    alias: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'cl_component'
  });
};
