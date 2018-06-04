/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_photos', {
    photoId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    projectId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    modelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    agentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    fileName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    photoDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isCover: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    isLogo: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    orientation: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    displayOrder: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    photoDate: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    tableName: 'tbl_photos'
  });
};
