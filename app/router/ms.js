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
        msLogin,msIndex,msOrder,msProduct,msUser
    } = controller;

    router.post('/api/ms/verityUser', msLogin.verityUser);
    router.post('/api/ms/loginByPwd',msLogin.loginByPwd);
    router.get('/api/ms/firstPage',msIndex.firstPage);
    router.post('/api/ms/getOrderPage',msOrder.getOrderPage);
    router.post('/api/ms/getOrder',msOrder.getOrder);
    router.post('/api/ms/updateOrderStatus',msOrder.updateOrderStatus);
    router.post('/api/ms/searchOrder',msOrder.searchOrder);
    router.post('/api/ms/searchProduct',msProduct.searchProduct);
    router.post('/api/ms/getProductPage',msProduct.getProductPage);
    router.post('/api/ms/delProduct',msProduct.delProduct);
    router.post('/api/ms/updateProduct',msProduct.updateProduct);
    router.post('/api/ms/getProduct',msProduct.getProduct);
    router.post('/api/ms/multiDelProduct',msProduct.multiDelProduct);
    router.post('/api/ms/getUserPage',msUser.getUserPage);
    router.post('/api/ms/delUser',msUser.delUser);
    router.post('/api/ms/getUser',msUser.getUser);
    router.post('/api/ms/searchUser',msUser.searchUser);
};
