/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('pay_log_internal', {
    pay_log_internal_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    request_url: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    request_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    request_headers: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    request_body: {
      type: DataTypes.STRING(1000),
      allowNull: false
    },
    response_code: {
      type: DataTypes.INTEGER(6),
      allowNull: true
    },
    response_body: {
      type: DataTypes.STRING(1000),
      allowNull: true
    },
    response_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    curl_error: {
      type: DataTypes.STRING(1000),
      allowNull: true
    }
  }, {
    tableName: 'pay_log_internal'
  });
};
