/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_profiles', {
    user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true
    },
    lastname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    firstname: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: ''
    },
    birthday: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: '0000-00-00'
    },
    lang: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: 'nl'
    },
    gender: {
      type: DataTypes.INTEGER(1),
      allowNull: true
    },
    selection: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    selection_zoom: {
      type: DataTypes.FLOAT,
      allowNull: true
    },
    pfl_image_id_original: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    pfl_image_id_cropped: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    rotate: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    billingaddress: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    billingcity: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    billingregion: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: ''
    },
    billingpostal: {
      type: DataTypes.STRING(10),
      allowNull: true,
      defaultValue: ''
    },
    billingcountry: {
      type: DataTypes.STRING(2),
      allowNull: true,
      defaultValue: ''
    }
  }, {
    tableName: 'usr_profiles'
  });
};
