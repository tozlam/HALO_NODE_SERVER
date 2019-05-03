'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class ForumService extends Service {
    async getAllTopic(limit,count){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum?limit='+limit+'&count='+count ,
            'GET'
        );
    }

    async getTopicDetail(id,limit,count){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/'+id+'?limit='+limit+'&count='+count,
            'GET'
        );
    }

    async getType(id,limit,count){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/type',
            'GET'
        );
    }

    async getTypePage(id,limit,count){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/type/'+id+'?limit='+limit+'&count='+count,
            'GET'
        );
    }

    async newTopic(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/topic',
            'POST',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }

    async newBack(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/back',
            'POST',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }

    async updateTopic(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/topic',
            'PUT',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }

    async delTopic(id){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/topic/'+id,
            'DELETE',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async getMessage(){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/back',
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async searchTopic(param,limit,count){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/search/' + param + '?limit=' + limit + '&count=' + count,
            'GET',{}
        );
    }

    async delBack(id){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/forum/back/'+id,
            'DELETE',{},
            {
                headers: {'access_token': token}
            }
        );
    }
}
module.exports = ForumService;