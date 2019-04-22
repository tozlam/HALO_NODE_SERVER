'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class OrderManageService extends Service {

    async getOrder(pageSize,pageIndex){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/order?limit=' + pageIndex + '&count=' + pageSize,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async getOrderDetail(id){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/order/' + id,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async updateOrderStatus(id,status){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/order/status?id='+id+'&status='+status,
            'PUT', {},
            {
                headers: {'access_token': token}
            }
        );
    }

    async searchOrderByStatus(status,pageIndex,pageSize){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/order/status/' + status + '?limit=' + pageIndex + '&count=' + pageSize,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async searchOrderById(id){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/order/search/' + id ,
            'GET',{},
            {
                headers: {'access_token': token}
            }
        );
    }

    async updateShipment(params){
        const {ctx, app} = this;
        let token = ctx.session.adminToken;
        return await ctx.helper.tdRequest(ctx, app.config.serverConf.HALO_API + '/halo/admin/order/shipment',
            'PUT',
            params,
            {
                headers: {'access_token': token}
            }
        );
    }
}
module.exports = OrderManageService;