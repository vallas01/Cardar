const csrf = require('csurf');

const csrfProtection = csrf({cookie: true});

const asyncHandler = (handler) => (req, res, next) => handler(req, res, next).catch(next);

async function searchModels(term) {
    const models = await Post.findAll({
      where: {
        model: {
          [Op.iLike]: `%${term}%`
        }
      }
    })
    return models;
}

async function searchMakes(term) {
  const makes = await Post.findAll({
    where: {
      make: {
        [Op.iLike]: `%${term}%`
      }
    }
  })
  return makes;
}

async function searchYears(term) {
  const years = await Post.findAll({
    where: {
      year: {
        [Op.iLike]: `%${term}%`
      }
    }
  })
  return years;
}


module.exports = {
    csrfProtection,
    asyncHandler,
    searchMakes,
    searchModels,
    searchYears
}
