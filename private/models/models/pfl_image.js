/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pfl_image', {
    pfl_image_id: {
      type: DataTypes.INTEGER(5),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    image_name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    image_size: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    image_type: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    data: {
      type: "MEDIUMBLOB",
      allowNull: true
    },
    category: {
      type: DataTypes.STRING(45),
      allowNull: true
    },
    width: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    height: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: true
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: '0000-00-00 00:00:00'
    }
  }, {
    tableName: 'pfl_image'
  });
};
