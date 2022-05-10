'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Comments', [
    {
      message: 'This is heat!',
      postId: 1,
      ownerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
        message: 'I need this!!!',
        postId: 1,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'Nice',
        postId: 1,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'On my way to pick this up ty',
        postId: 1,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'Sheeeeessshhh!',
        postId: 1,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'Dope!',
        postId: 2,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'He doesn\'t miss!',
        postId: 2,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'Me likey.',
        postId: 1,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'Cool.',
        postId: 1,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'Okay okaaayy!',
        postId: 2,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "They say 'if you can't take the heat, then stay out of the kitchen', and I'm definitely in the living room right now which is right next to my kitchen.",
        postId: 2,
        ownerId: 2,
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
   return queryInterface.bulkDelete('Comments', null, {});
  }
};
