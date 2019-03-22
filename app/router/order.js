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
        order
    } = controller;

    router.post('/api/order/myOrder', order.myOrder);
    router.post('/api/order/orderDetail',order.orderDetail);
    router.post('/api/order/newOrder',order.newOrder);
    router.post('/api/order/settlement',order.settlement);
    router.post('/api/order/buyNow',order.buyNow);
};
