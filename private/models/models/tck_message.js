/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tck_message', {
    tck_message_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    tck_topic_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    created_datetime: {
      type: DataTypes.DATE,
      allowNull: false
    }
  }, {
    tableName: 'tck_message'
  });
};
