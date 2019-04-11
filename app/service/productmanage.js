'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class ProductmanageService extends Service {
    async searchProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/typeAndName?type=' +
        params.type + '&name=' + params.name + '&pageIndex=' + params.pageIndex + '&pageCount=' + params.pageSize,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async getProductPage(pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/page?pageCount=' + pageSize,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async delProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/' + params,
            'DELETE'
        );
    }

    async updateProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/productInfoByPId',
            'PATCH',
            params,
            {
                headers: {'Content-Type': 'application/x-www-form-urlencoded'}
            }
        );
    }

    async getProduct(pageIndex,pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/?pageIndex=' + pageIndex + '&pageCount=' + pageSize,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async multiDelProduct(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/backstage/productmanage/' + params +'/multi',
            'DELETE'
        );
    }
}
module.exports = ProductmanageService;