'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class ItemsService extends Service {

    async productDetail(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/items/' + params,
            'GET'
        );
    }

    async searchProduct(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/items/search?name=' + params,
            'GET'
        );
    }

    async productByBrand(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/items/' + params + '/brand',
            'GET'
        );
    }

    async productByCateNBrand(cate,brand){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/items/' + cate + '/cate/' + brand + '/brand',
        'GET'
    );
    }

    async productByCate(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/items/' + params + '/cate',
            'GET'
        );
    }

    async productList(params){
        const { ctx, app } = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/items?pageIndex=' + params + '&pageCount=12',
            'GET'
        );
    }

}
module.exports = ItemsService;