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
    const authAdminLogin = middleware.authAdminLogin();
    const {
        msLogin, msIndex, msOrder, msProduct, msUser, msForum
    } = controller;
    // 登录相关
    router.post('/api/ms/verityUser', msLogin.verityUser);
    router.post('/api/ms/loginByPwd', msLogin.loginByPwd);
    router.get('/api/ms/logout', msLogin.logout);
    router.get('/api/ms/orderChartData', authAdminLogin, msIndex.orderChartData);
    router.get('/api/ms/productChartData', authAdminLogin, msIndex.productChartData);
    router.get('/api/ms/forumChartData', authAdminLogin, msIndex.forumChartData);
    // 订单管理
    router.post('/api/ms/getOrder', authAdminLogin, msOrder.getOrder);
    router.post('/api/ms/getOrderDetail', authAdminLogin, msOrder.getOrderDetail);
    router.post('/api/ms/updateOrderStatus', authAdminLogin, msOrder.updateOrderStatus);
    router.post('/api/ms/searchOrder', authAdminLogin, msOrder.searchOrder);
    router.post('/api/ms/updateShipment', authAdminLogin, msOrder.updateShipment);
    router.post('/api/ms/searchOrderById', authAdminLogin, msOrder.searchOrderById);
    // 商品管理
    router.post('/api/ms/searchProduct', authAdminLogin, msProduct.searchProduct);
    router.post('/api/ms/delProduct', authAdminLogin, msProduct.delProduct);
    router.post('/api/ms/updateProduct', authAdminLogin, msProduct.updateProduct);
    router.post('/api/ms/getProduct', authAdminLogin, msProduct.getProduct);
    router.post('/api/ms/multiDelProduct', authAdminLogin, msProduct.multiDelProduct);
    // 用户管理
    router.post('/api/ms/delUser', authAdminLogin, msUser.delUser);
    router.post('/api/ms/getUser', authAdminLogin, msUser.getUser);
    router.post('/api/ms/searchUser', authAdminLogin, msUser.searchUser);
    router.post('/api/ms/settleUserStatus', authAdminLogin, msUser.settleUserStatus);
    // 社区管理
    router.post('/api/ms/getTopicList', authAdminLogin, msForum.getTopicList);
    router.post('/api/ms/getTopicDetail', authAdminLogin, msForum.getTopicDetail);
    router.post('/api/ms/searchTopic', authAdminLogin, msForum.searchTopic);
    router.post('/api/ms/topicBack', authAdminLogin, msForum.topicBack);
    router.post('/api/ms/delTopic', authAdminLogin, msForum.delTopic);
    router.post('/api/ms/delBack', authAdminLogin, msForum.delBack);
    router.get('/api/ms/getType', authAdminLogin, msForum.getType);
    router.post('/api/ms/searchByType', authAdminLogin, msForum.searchByType);
};
