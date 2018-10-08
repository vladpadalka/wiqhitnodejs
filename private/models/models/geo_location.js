/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('geo_location', {
    locId: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    country: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    region: {
      type: DataTypes.CHAR(2),
      allowNull: false
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    postalCode: {
      type: DataTypes.CHAR(5),
      allowNull: false
    },
    latitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    dmaCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    areaCode: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'geo_location'
  });
};
