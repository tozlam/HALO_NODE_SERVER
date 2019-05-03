'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class AuthsService extends Service {

    async verifyPhone(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/auths/verifyPhone/' + params,
            'GET'
        );
    }

    async loginByPwd(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/auths/loginByPwd',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded','Cookie':ctx.cookies.get('cart', { signed: false })}
            }
        );
    }

    async loginByCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/auths/loginByCode',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded','Cookie':ctx.cookies.get('cart', { signed: false })}
            }
        );
    }

    async requestSmsCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/auths/requestSmsCode/' + params,
            'GET'
        );
    }

    async verifyCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/auths/verifyCode',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

}
module.exports = AuthsService;