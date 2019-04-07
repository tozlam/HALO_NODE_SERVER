'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class UsermanageService extends Service {
    async getUserPage(pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/usermanage/page?pageCount=' + pageSize,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async delUser(id){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/usermanage/' + id,
            'DELETE'
        );
    }

    async getUser(pageIndex,pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/usermanage/users?pageIndex=' + pageIndex + '&pageCount=' + pageSize,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async searchUser(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/usermanage/' + params,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }
}
module.exports = UsermanageService;