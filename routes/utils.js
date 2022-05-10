const csrf = require('csurf');

const csrfProtection = csrf({cookie: true});

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

async function searchPosts(term) {
    const posts = await Post.findAll({
      where: {
        [Op.or]: [
          { 
            model: {
              [Op.iLike]: `%${term}%`
            }
          },
          {
            make: {
              [Op.iLike]: `%${term}%`
            }
          },
          {
            year: {
              [Op.iLike]: `%${term}%`
            }
          },
          {
            color: {
              [Op.iLike]: `%${term}%`
            }
          }
        ]
      }
    })
    return posts;
}


module.exports = {
    csrfProtection,
    asyncHandler,
    searchPosts
    
}
