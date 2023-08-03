const router = require('express').Router();
const { Tag, Product, ProductTag } = require('../../models');

// The `/api/tags` endpoint

router.get('/', (req, res) => {
  // find all tags
  // include its associated Product data

  Tag.findAll().then((tagData) => {
    res.json(tagData);
  });
});

router.get('/:id', (req, res) => {
  // find a single tag by its `id`
  // include its associated Product data
Tag.findByPk(req.params.id).then((tagData)=> {
res.json(tagData);
});

});

router.post('/', (req, res) => {
  // create a new tag

  Tag.create({tag_name:req.body.tag_name}).then((newTag) => {
res.json(newTag);
  })
  .catch((err) => {
res.json(err)
  });
});

router.put('/:id', (req, res) => {
  // update a tag's name by its `id` value
  Tag.update({tag_name:req.body.tag_name},{
    where: {id : req.params.id}
  })
  .then((updateTag) =>{
    res.json(updateTag);
  })
  .catch((err) =>{
    res.json(err);
  })
});

router.delete('/:id', (req, res) => {
  // delete on tag by its `id` value
  Tag.destroy({where:{ id: req.params.id},
  })
  .then((deleteTag) => {
res.json(deleteTag);
  })
  .catch((err) =>{
    res.json(err);
  })
});

module.exports = router;
