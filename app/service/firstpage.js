'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class FirstPageService extends Service {
    async firstPage() {
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/firstpage/',
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }
}
module.exports = FirstPageService;