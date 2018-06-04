/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_property_types', {
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    type_name: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tbl_property_types'
  });
};
