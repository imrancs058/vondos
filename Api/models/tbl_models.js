/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_models', {
    modelId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    projectId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    modelName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modelDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modelSqFt: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    modelBeds: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modelBaths: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modelFloors: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    modelPrice: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tbl_models'
  });
};
