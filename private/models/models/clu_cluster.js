/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('clu_cluster', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    lat: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    lon: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    collector_addr: {
      type: DataTypes.STRING(250),
      allowNull: true
    },
    image_dir: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    tableName: 'clu_cluster'
  });
};
