'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class ProductmanageService extends Service {
    async searchProduct(params,limit,count){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/product/search/' + params + '?limit=' + limit + '&count=' + count,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async getProductPage(pageSize){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/page?pageCount=' + pageSize,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async delProduct(params){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/product/' + params,
            'DELETE',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async updateProduct(params){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/product?id=' + params.id + '&name=' + encodeURI(params.name) + '&num=' + params.num + '&price=' + params.price,
            'PUT', {},
            {
                headers: {'access_token': token}
            }
        );
    }

    async getProduct(pageIndex,pageSize){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/product?limit=' + pageIndex + '&count=' + pageSize,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async multiDelProduct(params){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/' + params +'/multi',
            'DELETE',{},
            {
                headers: {'access_token': token}
            }
        );
    }
}
module.exports = ProductmanageService;