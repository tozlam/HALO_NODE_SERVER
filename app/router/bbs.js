'use strict';


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
};
