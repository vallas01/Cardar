'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      */
   return queryInterface.bulkInsert('Images', [
    {
      path: 'https://media.ed.edmunds-media.com/for-sale/54-zhwua6zx1mla17776/img-1-600x400.jpg',
      name: 'Lamborghini',
      postId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      path: 'https://cdn-ds.com/blogs-media/sites/603/2019/04/11082450/20109-Nissan-GT-R-NISMO-ext1_o.jpg',
      name: 'Nissan',
      postId: 2,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      path: 'https://cdn1.mecum.com/auctions/pa0819/pa0819-388563/images/1-1562852447858@2x.jpg?1564083798000',
      name: 'Jeep',
      postId: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      path: 'https://robbreport.com/wp-content/uploads/2021/05/1-13.jpg?w=1000',
      name: 'Porsche',
      postId: 4,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      path: 'https://i.ytimg.com/vi/XF6VsyqXwFg/maxresdefault.jpg',
      name: 'Toyota',
      postId: 5,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      path: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/09/Tesla-Model-X-P100D-1.jpg',
      name: 'Tesla',
      postId: 6,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      path: 'https://www.teslarati.com/wp-content/uploads/2020/09/Lucid-Air-5.png',
      name: 'Lucid',
      postId: 7,
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
   return queryInterface.bulkDelete('Images', null, {});
  }
};
