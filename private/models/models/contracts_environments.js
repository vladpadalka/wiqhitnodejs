/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('contracts_environments', {
    acc_contract_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true
    }
  }, {
    tableName: 'contracts_environments'
  });
};
