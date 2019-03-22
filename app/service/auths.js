'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class AuthsService extends Service {

    async verifyPhone(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/auths/verifyPhone/' + params,
            'GET'
        );
    }

    async loginByPwd(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/auths/loginByPwd',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async loginByCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/auths/loginByCode',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async requestSmsCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/auths/requestSmsCode/' + params,
            'GET'
        );
    }

}
module.exports = AuthsService;