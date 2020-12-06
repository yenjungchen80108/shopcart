const UserController = require('./controllers/UserController');
const ProductController = require('./controllers/ProductController');
const AuthenticationPolicies = require('./controllers/AuthenticationPolicies');

module.exports = (app) => {
    // register a new user
    app.post('/register',
    AuthenticationPolicies.register,
    UserController.createUser)
    // get all users
    app.get('/register',
    UserController.getUsers)
    // delete one user
    app.delete('/register/:id',
    UserController.deleteUser)

    // create a product
    app.post('/products',
    ProductController.createProduct)
    // get all products
    app.get('/products',
    ProductController.getProducts)
    // get a product
    app.get('/products/:id',
    ProductController.getProduct)
    // delete a product
    app.delete('/products/:id',
    ProductController.deleteProduct)
    // update a product
    app.post('/products/:id',
    ProductController.updateProduct)
    // insert a product(TBM)
    app.put('/products/:id',
    ProductController.insertProductVariant)
}
