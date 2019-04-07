'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class CommonService extends Service {
    async imageSave(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/common/image',
            'POST',
            params
        );
    }
}
module.exports = CommonService;