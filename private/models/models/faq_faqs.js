/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('faq_faqs', {
    faq_faqs_id: {
      type: DataTypes.INTEGER(3),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    faq_category_name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    faq_category: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    faq_question: {
      type: DataTypes.STRING(80),
      allowNull: false
    },
    faq_answer: {
      type: DataTypes.STRING(500),
      allowNull: false
    },
    faq_language: {
      type: DataTypes.STRING(2),
      allowNull: false,
      defaultValue: 'nl'
    }
  }, {
    tableName: 'faq_faqs'
  });
};
