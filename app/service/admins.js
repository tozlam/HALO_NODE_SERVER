'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class AdminsService extends Service {
    async verityUser(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/admins/verityUsername/' + params,
            'GET'
        );
    }

    async loginByPwd(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/admins/loginByPwd',
            'POST',
            params,
            {
                headers: { 'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }
}
module.exports = AdminsService;