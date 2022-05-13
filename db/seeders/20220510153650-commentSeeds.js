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
        message: 'OMG.',
        postId: 3,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'YO.',
        postId: 3,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: 'THIS IS CRAZZZYYY!!!',
        postId: 3,
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
    },
    {
        message: "Would love to see his insurance bill for a $40 million car haha",
        postId: 10,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "That's one of the best sounding cars I've ever heard. What a beautiful machine.",
        postId: 10,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Arguably the greatest sounding engine of all time.",
        postId: 10,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Most cars of this caliber are treated like caged tigers. Pampered, but not doing what they were made for. It makes me so happy to see one in its natural habitat.",
        postId: 10,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Wow nice bro",
        postId: 11,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Timeless",
        postId: 11,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "anyone here who says that this vehicle is garbage, go to Porsche dealership and drive it, you will fall in love.",
        postId: 11,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "NAAAUUURRRRRRR",
        postId: 11,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "NAAAUUURRRRRRR",
        postId: 4,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "NAAAUUURRRRRRR",
        postId: 6,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "NAAAUUURRRRRRR",
        postId: 7,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "NAAAUUURRRRRRR",
        postId: 2,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "NAAAUUURRRRRRR",
        postId: 5,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "I'll own this black badge one day",
        postId: 1,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "The car is absolute fire.",
        postId: 12,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Awesome carrrr!!!!!",
        postId: 12,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "^What they said.",
        postId: 12,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Very nice Bentley. I\'m very impressed with the horsepower and effortless driving experience. ",
        postId: 9,
        ownerId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Best car ever made. Looks beautiful",
        postId: 9,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "will get one when my shib goes to.01",
        postId: 9,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "such cool. very wow. much nice.",
        postId: 9,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Do you accept Doge?",
        postId: 8,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Interior is SLEEK!",
        postId: 8,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "How much thooooo?",
        postId: 8,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "I absolutely LOVE the Lexus brand, but I still can't get used to this weird spindle grille on the latest iterations of their vehicles",
        postId: 13,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Beastly!... A very nice SUV from Lexus.",
        postId: 13,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Lexus built awesome vehicles like it",
        postId: 13,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "I would never buy a used Lexus again they hold their value so well you might as well get it new.",
        postId: 13,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "I am going to need this for my incoming road trip!",
        postId: 14,
        ownerId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Might need to cop this...",
        postId: 14,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "This one's a BEAST.",
        postId: 14,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "SO EXCITED FOR THIS TO COME OUT!",
        postId: 15,
        ownerId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "For road trips Nio is the best EV if there are swap stations along the way. Also it is the only EV I'd own without needing to install a home charger.",
        postId: 15,
        ownerId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        message: "Will my boss Elon be mad if I got this...?",
        postId: 15,
        ownerId: 3,
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
