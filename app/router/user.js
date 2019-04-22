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

    router.post('/api/user/userData',authLogin,user.userData);
    router.post('/api/user/loginVerifyPhone', user.loginVerifyPhone);
    router.post('/api/user/loginByPwd', user.loginByPwd);
    router.post('/api/user/loginByCode', user.loginByCode);
    router.post('/api/user/loginRequestSmsCode', user.loginRequestSmsCode);
    router.post('/api/user/regVerifyPhone', user.regVerifyPhone);
    router.post('/api/user/regRequestSmsCode', user.regRequestSmsCode);
    router.post('/api/user/regVerifyCode', user.regVerifyCode);
    router.post('/api/user/registerByPhone', user.registerByPhone);
    router.post('/api/user/updatePwd',authLogin,user.updatePwd);
    router.post('/api/user/verifyPwd',authLogin,user.verifyPwd);
    router.post('/api/user/updateEmail',authLogin,user.updateEmail);
    router.post('/api/user/updatePhone',authLogin,user.updatePhone);
    router.post('/api/user/requestEmailVerify',authLogin,user.requestEmailVerify);
    router.post('/api/user/coinData',authLogin,user.coinData);
    router.post('/api/user/chargeCoin',authLogin,user.chargeCoin);
    router.post('/api/user/saveAvatar',authLogin,user.saveAvatar);
    router.get('/api/user/getAddress',authLogin,user.getAddress);
    router.post('/api/user/delAddress',authLogin,user.delAddress);
    router.post('/api/user/updateAddress',authLogin,user.updateAddress);
    router.post('/api/user/addAddress',authLogin,user.addAddress);
    router.get('/api/user/logout',user.logout);
    router.get('/api/user/publicKey',user.publicKey);
};
