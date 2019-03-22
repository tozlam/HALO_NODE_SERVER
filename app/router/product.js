'use strict';

/**
 * @param {Egg.RuleData} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller,
        middleware
    } = app;

    const {
        product
    } = controller;

    router.post('/api/product/productDetail', product.productDetail);
    router.get('/api/product/getCategorys',product.getCategorys);
    router.post('/api/product/categorysDetail',product.categorysDetail);
    router.post('/api/product/searchProduct',product.searchProduct);
    router.post('/api/product/productByBrand',product.productByBrand);
    router.post('/api/product/productByCateNBrand',product.productByCateNBrand);
    router.post('/api/product/productByCate',product.productByCate);
    router.post('/api/product/productList',product.productList);
};
