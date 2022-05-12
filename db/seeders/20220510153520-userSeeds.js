'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Users', [
     {
      username: 'demoUser',
      hashedPassword: 'strongPassword1Demo',
      firstName: 'Demo',
      lastName: 'User',
      email: 'demouser@test.com',
      bio: 'I am a test user, I just love cars so much',
      state: 'Vermont',
      createdAt: new Date(),
      updatedAt: new Date()
     },
    {
      username: 'iFlexCars',
      hashedPassword: 'strongPassword1!',
      firstName: 'Anthony',
      lastName: 'Taylor',
      email: 'iflexcars@test.com',
      bio: 'Refer to my username',
      state: 'California',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'ZoomZoom',
      hashedPassword: 'strongPassword2!',
      firstName: 'Andy',
      lastName: 'Vallas',
      email: 'zoomzoom@test.com',
      bio: 'I dont see you with a V12 engine.',
      state: 'Florida',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'iSellCars',
      hashedPassword: 'strongPassword3!',
      firstName: 'Joshua',
      lastName: 'Keim',
      email: 'isellcarsm@test.com',
      bio: 'Serious inquiries only',
      state: 'Washington D.C.',
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      username: 'EBraker',
      hashedPassword: 'strongPassword4!',
      firstName: 'Chris',
      lastName: 'Chueng',
      email: 'ebraker@test.com',
      bio: 'One time, my brake was broken, so I had to stop with my ebrake. I never went back since.',
      state: 'New Jersey',
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
   return queryInterface.bulkDelete('Users', null, {});
  }
};
