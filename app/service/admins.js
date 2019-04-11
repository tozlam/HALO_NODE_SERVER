'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class AdminsService extends Service {
    async verityUser(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/verify/' + params,
            'GET'
        );
    }

    async loginByPwd(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/login?username=' + params.username + '&password=' + params.password,
            'GET'
        );
    }
}
module.exports = AdminsService;