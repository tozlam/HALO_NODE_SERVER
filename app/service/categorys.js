'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class CategorysService extends Service {

    async getCategorys(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/categorys/',
            'GET'
        );
    }

    async categorysDetail(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/categorys/' + params,
            'GET'
        );
    }
}
module.exports = CategorysService;