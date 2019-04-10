'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class AuthsService extends Service {

    async verifyPhone(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/store/auths/verifyPhone/' + params,
            'GET'
        );
    }

    async loginByPwd(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/store/auths/loginByPwd',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async loginByCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/store/auths/loginByCode',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async requestSmsCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/store/auths/requestSmsCode/' + params,
            'GET'
        );
    }

}
module.exports = AuthsService;