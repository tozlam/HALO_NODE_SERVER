'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class CartsService extends Service {
    async getCart(){
        const { ctx, app } = this;
        let token = ctx.session.token;
        let header = {
            headers: {'Cookie':ctx.cookies.get('cart', { signed: false })}
            };
        if(token){
            header = {
                headers: {'access_token': token}
            };
        }
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/carts/' ,
            'GET',{},
            header
        );
    }

    async addCart(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        let header = {
            headers: {'Cookie':ctx.cookies.get('cart', { signed: false })}
        };
        let needHeader = true;
        if(token){
            header = {
                headers: {'access_token': token}
            };
            needHeader = false;
        }
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/carts/' ,
            'POST',
            params,
            header,
            needHeader
        );
    }

    async updateCart(params,proId){
        const { ctx, app } = this;
        let token = ctx.session.token;
        let header = {
            headers: {'Cookie':ctx.cookies.get('cart', { signed: false }),'Content-Type': 'application/x-www-form-urlencoded'}
        };
        let needHeader = true;
        if(token){
            header = {
                headers: {'access_token': token,'Content-Type': 'application/x-www-form-urlencoded'}
            };
            needHeader = false;
        }
        if(token){
            header = {
                headers: {'access_token': token, 'Content-Type': 'application/x-www-form-urlencoded'}
            };
        }
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/carts/' + proId,
            'PATCH',
            params,
            header,
            needHeader
        );
    }

    async delCart(proId){
        const { ctx, app } = this;
        let token = ctx.session.token;
        let header = {
            headers: {'Cookie':ctx.cookies.get('cart', { signed: false })}
        };
        let needHeader = true;
        if(token){
            header = {
                headers: {'access_token': token}
            };
            needHeader = false;
        }
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/carts/' + proId,
            'DELETE', {},
            header,
            needHeader
        );
    }
}
module.exports = CartsService;