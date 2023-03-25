module.exports = (app, router) => {
    const productController = require('../controllers/products.controller.js');

    router.get('/search', productController.index);

    app.use('/api/products', router);
};

