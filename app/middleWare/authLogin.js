'use strict';

module.exports = () => {

    /**
     * 校验是否登录
     */
    return async function (ctx, next) {
        const isLogin = ctx.session.token;
        if (!isLogin) {
            ctx.status = 403;
            ctx.body = 'forbidden!';
            return;
        }
        await next();
    }

}