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
    const {
        user
    } = controller;

    router.post('/api/user/loginVerifyPhone', user.loginVerifyPhone);
    router.post('/api/user/loginByPwd', user.loginByPwd);
    router.post('/api/user/loginByCode', user.loginByCode);
    router.post('/api/user/loginRequestSmsCode', user.loginRequestSmsCode);
    router.post('/api/user/regVerifyPhone', user.regVerifyPhone);
    router.post('/api/user/regRequestSmsCode', user.regRequestSmsCode);
    router.post('/api/user/regVerifyCode', user.regVerifyCode);
    router.post('/api/user/registerByPhone', user.registerByPhone);
    router.post('/api/user/userData',authLogin,user.userData);
    router.post('/api/user/updatePwd',user.updatePwd);
    router.post('/api/user/verifyPwd',user.verifyPwd);
    router.post('/api/user/updateEmail',user.updateEmail);
    router.post('/api/user/updatePhone',user.updatePhone);
    router.post('/api/user/requestEmailVerify',user.requestEmailVerify);
    router.post('/api/user/coinData',user.coinData);
    router.post('/api/user/chargeCoin',user.chargeCoin);
    router.post('/api/user/saveAvatar',user.saveAvatar);
    router.get('/api/user/getAddress',user.getAddress);
    router.post('/api/user/delAddress',user.delAddress);
    router.post('/api/user/updateAddress',user.updateAddress);
    router.post('/api/user/addAddress',user.addAddress);
    router.get('/api/user/logout',user.logout);
};
