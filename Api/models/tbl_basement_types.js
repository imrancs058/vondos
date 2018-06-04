/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_basement_types', {
    basement_id: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    basement_label: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tbl_basement_types'
  });
};
