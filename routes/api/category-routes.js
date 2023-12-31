const router = require('express').Router();
const { Category, Product } = require('../../models');

// The `/api/categories` endpoint

router.get('/', (req, res) => {
  Category.findAll().then((categoryData) => {
    res.json(categoryData);
  })
  // find all categories
  //include its associated Products
});

router.get('/:id', (req, res) => {
  //   // find one category by its `id` value
  //   // include its associated Products
  Category.findByPk(req.params.id).then((categoryData) => {
    res.json(categoryData);
  });
});

router.post('/', (req, res) => {
  //   // create a new category
  Category.create({
    category_name: req.body.category_name,
  })
    .then((categoryData) => { res.json(categoryData) })
});

router.put('/:id', (req, res) => {
  //   // update a category by its `id` value
  Category.update({category_name: req.body.category_name},{
    where: { id: req.params.id}
  })
    .then((updatecategory) => {
      req.json(updatecategory);
    })
    .catch((err) => res.json(err));
});

router.delete('/:id', (req, res) => {
  //   // delete a category by its `id` value
  Category.destroy({
    where: {
      id: req.params.id
    },
  })
    .then((deleteCategory) => {
      req.json(deleteCategory)
    })
    .catch((err) => res.json(err));
});

module.exports = router;
