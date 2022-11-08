const Location = require('./Location');
const Traveler = require('./Traveler');
const Trip = require('./Trip');


Traveler.belongsToMany(Location, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'planned_trips'
});

Location.belongsToMany(Traveler, {
  // Define the third table needed to store the foreign keys
  through: {
    model: Trip,
    unique: false
  },
  // Define an alias for when data is retrieved
  as: 'location_travellers'
});

module.exports = { Traveler, Location, Trip };