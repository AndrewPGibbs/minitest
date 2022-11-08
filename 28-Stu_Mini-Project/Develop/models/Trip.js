const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Trip extends Model {}

Trip.init(
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true
      },
      trip_budget: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: true
      },
      traveler_amount: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1
      },
      traveler_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'traveler',
          key: 'id',
          unique: false
        }
      },
      location_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'location',
          key: 'id',
          unique: false
        }
      }
    },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'trip',
  }
);

module.exports = Trip;
