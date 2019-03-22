'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class FirstPageService extends Service {
    async firstPage() {
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/firstpage/',
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=D3FF98536366C52D57D780359DF08D64'}
            }
        );
    }
}
module.exports = FirstPageService;