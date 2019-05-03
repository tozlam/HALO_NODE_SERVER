'use strict';

module.exports = () => {

    /**
     * 校验是否登录
     */
    return async function (ctx, next) {
        const isLogin = ctx.session.token;
        const expireTime = ctx.session.expireTime;
        const nowTime = new Date().getTime();
        if (!isLogin) {
            ctx.status = 200;
            ctx.body = {
                data: {
                    errorCode: 403,
                    msg: '请登录'
                }
            };
            return;
        }else if(nowTime > expireTime){
            ctx.status = 200;
            ctx.body = {
                data: {
                    errorCode: 403,
                    msg: '登录超时，请重新登录'
                }
            };
            return;
        }
        await next();
    }

}