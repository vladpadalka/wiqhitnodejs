/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('adm_invoice', {
    adm_invoice_id: {
      type: DataTypes.INTEGER(9),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    invoice_date: {
      type: DataTypes.DATE,
      allowNull: false
    },
    invoice_status: {
      type: DataTypes.STRING(11),
      allowNull: false
    },
    acc_contract_id: {
      type: DataTypes.INTEGER(8).UNSIGNED,
      allowNull: false
    }
  }, {
    tableName: 'adm_invoice'
  });
};
