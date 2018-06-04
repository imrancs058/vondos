/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_projects', {
    projectId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agentId: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    projectName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    digitalProperty: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectDescription: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectDeveloper: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectStatus: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectStartPrice: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectStreetNumber: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectStreetName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectCity: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectMainIntersection: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectLatitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectLongitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectTotalBuildings: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectTotalStories: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectTotalUnits: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectSmallestUnit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectLargestUnit: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectAveragePrice: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectEstimatedCompletion: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    projectURL: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    isVondos: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '1'
    }
  }, {
    tableName: 'tbl_projects'
  });
};
