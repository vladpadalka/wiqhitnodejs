/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('cfg_lightspeed', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    cluster_id: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    language: {
      type: DataTypes.STRING(2),
      allowNull: false
    },
    shop_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      unique: true
    },
    signature: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
      unique: true
    },
    main_domain: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    usr_user_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    }
  }, {
    tableName: 'cfg_lightspeed'
  });
};
