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
        postId: 1,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://cdn-ds.com/blogs-media/sites/603/2019/04/11082450/20109-Nissan-GT-R-NISMO-ext1_o.jpg',
        postId: 2,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://cdn1.mecum.com/auctions/pa0819/pa0819-388563/images/1-1562852447858@2x.jpg?1564083798000',
        postId: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://robbreport.com/wp-content/uploads/2021/05/1-13.jpg?w=1000',
        postId: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://i.ytimg.com/vi/XF6VsyqXwFg/maxresdefault.jpg',
        postId: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://static1.hotcarsimages.com/wordpress/wp-content/uploads/2020/09/Tesla-Model-X-P100D-1.jpg',
        postId: 6,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://www.teslarati.com/wp-content/uploads/2020/09/Lucid-Air-5.png',
        postId: 7,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://cars.usnews.com/pics/size/776x517/images/Auto/custom/14652/2022_Hyundai_Ioniq_5_22.jpg',
        postId: 8,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://hips.hearstapps.com/hmg-prod/images/2022-bentley-continental-gt-speed-128-1620193617.jpg?crop=0.675xw:0.493xh;0.162xw,0.257xh&resize=1200:*',
        postId: 9,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://img.hmn.com/900x0/stories/2018/06/1962-Ferrari-250-GTO-by-Scaglietti_33.jpg',
        postId: 10,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://cimg1.ibsrv.net/ibimg/hgm/1920x1080-1/100/548/2017-porsche-718-boxster-s-2016-geneva-motor-show_100548253.jpg',
        postId: 11,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://imageio.forbes.com/specials-images/imageserve/5f4e2f719ea3d23d78b167b8/New-2020-Rolls-Royce-Ghost/960x0.jpg?fit=bounds&format=jpg&width=960',
        postId: 12,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://lexus-cms-media.s3.us-east-2.amazonaws.com/wp-content/uploads/2019/04/Lexus_LXI_frontthreequarter_003_2988C56D337C7D0A30CBD34F4A119E687CB740AA.jpg',
        postId: 13,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://www.autotrader.com/wp-content/uploads/2020/02/2020-Ford-Transit-.1..jpg',
        postId: 14,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        path: 'https://www.carscoops.com/wp-content/uploads/2019/03/cad8840d-nio-es8-tuning-revozport-00.jpg',
        postId: 15,
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
