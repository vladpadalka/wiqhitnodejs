/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_profiles_fields', {
    id: {
      type: DataTypes.INTEGER(10),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    varname: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    field_type: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    field_size: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    field_size_min: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    required: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    },
    match: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    range: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    error_message: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    other_validator: {
      type: DataTypes.STRING(5000),
      allowNull: false,
      defaultValue: ''
    },
    default: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    widget: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: ''
    },
    widgetparams: {
      type: DataTypes.STRING(5000),
      allowNull: false,
      defaultValue: ''
    },
    position: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      defaultValue: '0'
    },
    visible: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'usr_profiles_fields'
  });
};
