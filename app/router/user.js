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
        user
    } = controller;

    router.post('/api/user/verifyPhone', user.verifyPhone);
    router.post('/api/user/loginByPwd', user.loginByPwd);
    router.post('/api/user/loginByCode', user.loginByCode);
    router.post('/api/user/requestSmsCode', user.requestSmsCode);
};
