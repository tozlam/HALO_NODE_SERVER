'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class ProductmanageService extends Service {
    async searchProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/productmanage/typeAndName?type=' +
        params.type + '&name=' + params.name + '&pageIndex=' + params.pageIndex + '&pageCount=' + params.pageSize,
            'GET'
        );
    }

    async getProductPage(pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/productmanage/page?pageCount=' + pageSize,
            'GET'
        );
    }

    async delProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/productmanage/' + params,
            'DELETE'
        );
    }

    async updateProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/productmanage/productInfoByPId',
            'PATCH',
            params,
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async getProduct(pageIndex,pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/productmanage/?pageIndex=' + pageIndex + '&pageCount=' + pageSize,
            'GET'
        );
    }

    async multiDelProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/productmanage/' + params +'/multi',
            'DELETE'
        );
    }
}
module.exports = ProductmanageService;