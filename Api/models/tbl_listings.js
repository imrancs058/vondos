/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('tbl_listings', {
    listing_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    mls_id: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    list_status: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    list_date: {
      type: DataTypes.DATE,
      allowNull: true
    },
    open_house: {
      type: DataTypes.DATE,
      allowNull: true
    },
    open_house_start: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    open_house_end: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    price: {
      type: "DOUBLE",
      allowNull: true
    },
    open_house2: {
      type: DataTypes.DATE,
      allowNull: true
    },
    open_house_start2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    open_house_end2: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    class_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    bedrooms: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    bathrooms: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    lot_lenght: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    lot_width: {
      type: DataTypes.DECIMAL,
      allowNull: true
    },
    taxes: {
      type: "DOUBLE",
      allowNull: true
    },
    address: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    type_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    basement_id: {
      type: DataTypes.INTEGER(11),
      allowNull: true
    },
    virtual_tour: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    year_built: {
      type: DataTypes.STRING(50),
      allowNull: true
    }
  }, {
    tableName: 'tbl_listings'
  });
};
