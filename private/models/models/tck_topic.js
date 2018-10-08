/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tck_topic', {
    tck_topic_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    code: {
      type: DataTypes.STRING(5),
      allowNull: false
    },
    acc_environment_id: {
      type: DataTypes.INTEGER(5).UNSIGNED,
      allowNull: false
    },
    subject: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    },
    type_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    status_id: {
      type: DataTypes.INTEGER(4),
      allowNull: false
    },
    lastupdated_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'tck_topic'
  });
};
