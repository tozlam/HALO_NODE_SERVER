'use strict';

const Service = require('egg').Service;
const _ = require('lodash');
class UsersService extends Service {

    async userData(){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/' ,
            'GET',{},{
                headers: {'access_token': token}
            }
        );
    }

    async updatePwd(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/pwd' ,
            'PATCH',
            params,{
                headers: {'access_token': token, 'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async verifyPwd(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/verifyPwd/' + params ,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async updateEmail(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/email' ,
            'PATCH',
            params,{
                headers: {'access_token': token, 'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async updatePhone(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/phone' ,
            'PATCH',
            params,{
                headers: {'access_token': token, 'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async requestEmailVerify(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/requestEmailVerify?email=' + params ,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async coinData(){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/coin' ,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async chargeCoin(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/coin' ,
            'PATCH',
            params,{
                headers: {'access_token': token, 'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async saveAvatar(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/users/avatar?url=' + params ,
            'PATCH', {},
            {
                headers: {'access_token': token}
            }
        );
    }

    async getAddress(){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/addresses/' ,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async delAddress(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/addresses/' + params,
            'DELETE',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async updateAddress(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/addresses/',
            'PUT',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }

    async addAddress(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/addresses/',
            'POST',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }

    async addAddress(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/addresses/',
            'POST',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }
}
module.exports = UsersService;