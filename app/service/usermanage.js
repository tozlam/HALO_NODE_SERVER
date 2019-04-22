'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class UsermanageService extends Service {
    async getUserPage(pageSize){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/usermanage/page?pageCount=' + pageSize,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async delUser(id){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/usermanage/' + id,
            'DELETE'
        );
    }

    async getUser(pageIndex,pageSize){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/user?limit=' + pageIndex + '&count=' + pageSize,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async searchUser(params,limit,count){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/user/search/' + encodeURI(params) + '?limit=' + limit + '&count=' + count,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async settleUserStatus(params){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/user/status',
            'PUT',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }
}
module.exports = UsermanageService;