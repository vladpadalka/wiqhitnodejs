/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('usr_notifications', {
    usr_notifications_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    notification_timestamp: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false
    },
    user_id: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      defaultValue: '0'
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    category: {
      type: DataTypes.ENUM('Announcement','New feature','Improvement',''),
      allowNull: false
    },
    message: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    link: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  }, {
    tableName: 'usr_notifications'
  });
};
