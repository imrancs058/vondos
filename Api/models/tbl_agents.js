/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_agents', {
    agentId: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    agentName: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agentEmail: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agentPassword: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agentPhone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    agentDesignation: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    tableName: 'tbl_agents'
  });
};
