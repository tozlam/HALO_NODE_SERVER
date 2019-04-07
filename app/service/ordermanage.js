'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class OrderManageService extends Service {
    async getOrderPage(page){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/page?pageCount=' + page,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async getOrder(pageSize,pageIndex){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/orders?pageIndex=' + pageIndex + '&pageCount=' + pageSize,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async updateOrderStatus(params){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/status',
            'PATCH',
            params,
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }

    async searchOrder(status,pageIndex,pageSize){
        const {ctx, app} = this;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_BE + '/halo/backstage/ordermanage/' + status + '?pageIndex=' + pageIndex + '&pageCount=' + pageSize,
            'GET',{},
            {
                headers:{Cookie: 'JSESSIONID=07A14670F87C150209A0BBD3B5AF91AD'}
            }
        );
    }
}
module.exports = OrderManageService;