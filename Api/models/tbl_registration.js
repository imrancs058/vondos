/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_registration', {
    registrationId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    regDate: {
      type: DataTypes.DATE,
      allowNull: true
    },
    projectId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    modelId: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    clientid: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    verified: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    followup: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    RSVP: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    Floorplans: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    pricing: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    },
    vondos: {
      type: DataTypes.INTEGER(11),
      allowNull: true,
      defaultValue: '0'
    }
  }, {
    tableName: 'tbl_registration'
  });
};
