/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('acc_environment', {
    acc_environment_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    environment_name: {
      type: DataTypes.STRING(80),
      allowNull: true
    },
    location_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    environment_hash: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    expiration_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    creation_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    status: {
      type: DataTypes.INTEGER(1),
      allowNull: false,
      defaultValue: '1'
    },
    prd_product_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    script_in_use: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: '1'
    },
    current_visits: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    }
  }, {
    tableName: 'acc_environment'
  });
};
