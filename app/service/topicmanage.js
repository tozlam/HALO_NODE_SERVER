'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class TopicManageService extends Service {
    async getTopicList(limit,count){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/topic?limit=' + limit + '&count=' + count,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async getTopicDetail(id){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/topic/' + id,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async getTopicBack(id,limit,count){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/back/' + id + '?limit=' + limit + '&count=' + count,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async searchTopic(keyword,limit,count){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/topic/search/' + keyword + '?limit=' + limit + '&count=' + count,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async delTopic(ids){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/topic/' + ids ,
            'DELETE',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async delBack(ids){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/back/' + ids ,
            'DELETE',{},
            {
                headers: {'access_token': token}
            }
        );
    }
}
module.exports = TopicManageService;