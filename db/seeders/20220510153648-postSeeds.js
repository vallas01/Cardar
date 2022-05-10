'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Posts', [
    {
      name: 'New Car',
      model: 'Huracan',
      make: 'Lamborghini',
      year: '2022',
      color: 'yellow',
      accidents: '0',
      features: '',
      description: 'We made it!',
      ownerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'New Engine',
      model: 'GT-R',
      make: 'Nissan',
      year: '2019',
      color: 'white',
      accidents: '0',
      features: 'V6 engine',
      description: 'Anyone need an uber?',
      ownerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Old but Gold!',
      model: 'Wrangler',
      make: 'Jeep',
      year: '2009',
      color: 'black',
      accidents: '2',
      features: '',
      description: 'Love this car. Still runs great!',
      ownerId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Call 911.',
      model: '911',
      make: 'Porsche',
      year: '2021',
      color: 'red',
      accidents: '0',
      features: '',
      description: 'Had to go for a car wash today from all this HEAT.',
      ownerId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Selling this!',
      model: 'Camry',
      make: 'Toyota',
      year: '2016',
      color: 'gray',
      accidents: '1',
      features: 'SE',
      description: 'Too many cars in my driveway. Getting rid of this. DM me if you are interested!',
      ownerId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'New Family Member',
      model: 'X',
      make: 'Tesla',
      year: '2020',
      color: 'white',
      accidents: '0',
      features: 'Plaid, Autopilot',
      description: 'Thanks Elon!',
      ownerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      name: 'Test Driving',
      model: 'Air',
      make: 'Lucid',
      year: '2022',
      color: 'black',
      accidents: '0',
      features: 'Driver assistance system',
      description: 'Lucid Air is next level!',
      ownerId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    }
   ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkDelete('Posts', null, {});
  }
};
