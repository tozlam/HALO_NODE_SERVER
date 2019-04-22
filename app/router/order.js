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

    const authLogin = middleware.authLogin();
    const {order} = controller;

    router.post('/api/order/myOrder',authLogin, order.myOrder);
    router.post('/api/order/orderDetail',authLogin,order.orderDetail);
    router.post('/api/order/newOrder',authLogin,order.newOrder);
    router.post('/api/order/settlement',authLogin,order.settlement);
    router.post('/api/order/buyNow',authLogin,order.buyNow);
    router.get('/api/order/indexOrderNum',authLogin,order.indexOrderNum);
};
