'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class OrdersService extends Service {

    async myOrder(){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/orders/products',
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async orderDetail(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/orders/' + params + '/products',
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async newOrder(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/orders/',
        'POST',
        params,
        {
            headers: {'access_token': token}
        }
    );
    }

    async settlement(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/orders/settlement',
        'POST',
        params,
        {
            headers: {'access_token': token}
        }
    );
    }

    async buyNow(params){
        const { ctx, app } = this;
        let token = ctx.session.token;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/orders/now',
        'POST',
            params,
        {
            headers: {'access_token': token}
        }
    );
    }

}
module.exports = OrdersService;