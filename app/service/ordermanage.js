'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class OrderManageService extends Service {
    async getOrderPage(page){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/page?pageCount=' + page,
            'GET'
        );
    }

    async getOrder(pageSize,pageIndex){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/orders?pageIndex=' + pageIndex + '&pageCount=' + pageSize,
            'GET'
        );
    }

    async updateOrderStatus(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/status',
            'PATCH',
            params
        );
    }

    async searchOrder(status,pageIndex,pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/' + status + '?pageIndex=' + pageIndex + '&pageCount=' + pageSize,
            'GET'
        );
    }
}
module.exports = OrderManageService;