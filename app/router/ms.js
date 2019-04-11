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
        msLogin,msIndex,msOrder,msProduct,msUser,msForum
    } = controller;
    // 登录相关
    router.post('/api/ms/verityUser', msLogin.verityUser);
    router.post('/api/ms/loginByPwd',msLogin.loginByPwd);
    router.get('/api/ms/logout',msLogin.logout);
    router.get('/api/ms/firstPage',msIndex.firstPage);
    // 订单管理
    router.post('/api/ms/getOrderPage',msOrder.getOrderPage);
    router.post('/api/ms/getOrder',msOrder.getOrder);
    router.post('/api/ms/updateOrderStatus',msOrder.updateOrderStatus);
    router.post('/api/ms/searchOrder',msOrder.searchOrder);
    // 商品管理
    router.post('/api/ms/searchProduct',msProduct.searchProduct);
    router.post('/api/ms/getProductPage',msProduct.getProductPage);
    router.post('/api/ms/delProduct',msProduct.delProduct);
    router.post('/api/ms/updateProduct',msProduct.updateProduct);
    router.post('/api/ms/getProduct',msProduct.getProduct);
    router.post('/api/ms/multiDelProduct',msProduct.multiDelProduct);
    // 用户管理
    router.post('/api/ms/getUserPage',msUser.getUserPage);
    router.post('/api/ms/delUser',msUser.delUser);
    router.post('/api/ms/getUser',msUser.getUser);
    router.post('/api/ms/searchUser',msUser.searchUser);
    router.post('/api/ms/settleUserStatus',msUser.settleUserStatus);
    // 社区管理
    router.post('/api/ms/getTopicList',msForum.getTopicList);
    router.post('/api/ms/getTopicDetail',msForum.getTopicDetail);
    router.post('/api/ms/searchTopic',msForum.searchTopic);
    router.post('/api/ms/topicBack',msForum.topicBack);
    router.post('/api/ms/delTopic',msForum.delTopic);
    router.post('/api/ms/delBack',msForum.delBack);
};
