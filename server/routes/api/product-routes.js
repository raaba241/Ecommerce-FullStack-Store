const router = require('express').Router();
const { Product, Category, Tag, ProductTag } = require('../../models');

// The `/api/products` endpoint

// get all products
router.get('/', async (req, res) => {
  try {
    const productData = await Product.findAll({
      include: [
        Category,
        {
          model: Tag,
          through: { model: ProductTag, attributes: [] }, // Specify the through model and optionally the attributes you want to include from the join table
        }
      ]
    })
    res.json(productData)
  }catch(err){
    res.json(err)
  }
  // find all products
  // be sure to include its associated Category and Tag data
});

// get products in descending order by the products sold 
router.get('/sold', async (req, res) => {
  try {
    const productData = await Product.findAll({
      order: [['sold', 'DESC']],
      include: [
        Category,
        {
          model: Tag,
          through: { model: ProductTag, attributes: [] }, // Specify the through model and optionally the attributes you want to include from the join table
        }
      ],
      limit: 10,
    })
    res.json(productData)
  }catch(err) {
    res.json(err)
  }
})

// get one product
router.get('/:id', async (req, res) => {
  try {
    const productData = await Product.findOne({
      where: { id: req.params.id },
      include: [ Category , {
        model: Tag,
        through: Product
      }]
    })
    res.json(productData)
  }catch(err) {
    res.json(err)
  }
  

  // find a single product by its `id`
  // be sure to include its associated Category and Tag data
});

// create new product
router.post('/', (req, res) => {
  /* req.body should look like this...
    {
      product_name: "Basketball",
      price: 200.00,
      stock: 3,
      tagIds: [1, 2, 3, 4]
    }
  */
  Product.create(req.body)
    .then((product) => {
      // if there's product tags, we need to create pairings to bulk create in the ProductTag model
      if (req.body.tagIds.length) {
        const productTagIdArr = req.body.tagIds.map((tag_id) => {
          return {
            product_id: product.id,
            tag_id,
          };
        });
        return ProductTag.bulkCreate(productTagIdArr);
      }
      // if no product tags, just respond
      res.status(200).json(product);
    })
    .then((productTagIds) => res.status(200).json(productTagIds))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// update product
router.put('/:id', (req, res) => {
  Product.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((product) => {
      if (!req.body.tagIds) return res.json(product);

      return ProductTag.findAll({ where: { product_id: req.params.id } })
        .then((productTags) => {
          // Handle tag updates here...
          // Make sure to return a response in this block.
        })
        .catch((err) => {
          // It's important to catch any errors that might happen in the findAll or subsequent operations.
          res.status(500).json(err);
        });
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

// delete one product by its `id` value
router.delete('/:id', async (req, res) => {
  try {
    const productData = await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    if (productData) {
      res.json({ message: 'Product deleted' });
    } else {
      res.status(404).json({ message: 'No product found with this id' });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});


module.exports = router;
