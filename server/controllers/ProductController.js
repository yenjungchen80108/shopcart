let Product = require('../models/product.model')

module.exports = {
  
  createProduct (req, res) {
    const newProduct = new Product({
        name : req.body.name,
        shopName: req.body.shopName,
        price : req.body.price,
        weight : req.body.weight,
        type : req.body.type,
        categories : req.body.categories,
        imageUrl: req.body.imageUrl,
        /*
        variants :{
          sku: req.body.variants.sku,
          option_values: {
              option_display_name: req.body.variants.option_values.option_display_name,
              label: req.body.variants.option_values.label
          }
        }
        */
    });
    newProduct.save()
        .then(() => res.json('Product added!'))
        .catch(err => res.status(400).json('Error:' + err));
  },

  getProducts (req, res) {
    Product.find()
    .then(products => res.json(products))
    .catch(err => res.status(400).json('Error:' + err));
  },

  getProduct (req, res) {
    Product.findById(req.params.id)
    .then(product => res.json(product))
    .catch(err => res.status(400).json('Error:' + err));
  },

  deleteProduct (req, res) {
    Product.findByIdAndDelete(req.params.id)
    .then(() => res.json('Product Deleted'))
    .catch(err => res.status(400).json('Error:' + err));
  },

  updateProduct (req, res) {
      Product.findById(req.params.id).then((product) => {
        product.name = req.body.name,
        product.shopName = req.body.shopName,
        product.price = req.body.price,
        product.weight = req.body.weight,
        product.type = req.body.type,
        product.categories = req.body.categories,
        product.imageUrl = req.body.imageUrl,
        /*
        product.variants = {
          sku: req.body.variants.sku,
          option_values: {
              option_display_name: req.body.variants.option_values.option_display_name,
              label: req.body.variants.option_values.label
          }
        }
        */
        product.save()
        .then(() => res.json('Product Updated'))
        .catch(err => res.status(400).json('Error:' + err));
    })
  },

  insertProductVariant (req, res) {
    var sku = {"sku": req.body.variants.sku};
    Product.findOneAndUpdate({_id: req.params.id},
    {$push: [{"variants": sku}]},
    {useFindAndModify: false}, 
    function (err, result) {
      if (err) {
        res.status(403).json(err)
      } else {
        res.status(200).json(result)
      }
    })
}
}