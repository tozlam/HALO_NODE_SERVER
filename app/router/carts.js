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
        carts
    } = controller;

    router.get('/api/carts/getCart', carts.getCart);
    router.post('/api/carts/addCart',carts.addCart);
    router.post('/api/carts/updateCart',carts.updateCart);
    router.post('/api/carts/delCart',carts.delCart);
};
