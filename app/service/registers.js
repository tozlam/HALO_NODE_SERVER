'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class RegistersService extends Service {

    async verifyPhone(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/registers/verifyPhone/' + params,
            'GET'
        );
    }

    async requestSmsCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/registers/requestSmsCode/' + params,
            'GET'
        );
    }

    async verifyCode(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/registers/verifyCode',
            'POST',
            params,{
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async registerByPhone(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/registers/registerByPhone',
            'POST',
            params
        );
    }


}
module.exports = RegistersService;