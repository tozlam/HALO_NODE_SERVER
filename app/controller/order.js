'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class OrderService extends Service {
    async myOrder(){
        const {ctx, service} = this;
        const resp = await service.orders.myOrder();
        ctx.body = {
            data:resp
        };
    }

    async orderDetail(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.orders.orderDetail(inputParams.id);
        ctx.body = {
            data:resp
        };
    }

    async newOrder(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.orders.newOrder(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async settlement(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.orders.settlement(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async buyNow(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.orders.buyNow(inputParams);
        ctx.body = {
            data:resp
        };
    }
}

module.exports = OrderService;