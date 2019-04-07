'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class OrderService extends Service {
    async myOrder(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let resp = await service.orders.myOrder();
        if(inputParams.status !== 'all'){
            let temp = [];
            _.each(resp.data.orderDetailList,item => {
                if(inputParams.status === 'other'){
                    if(item.status == '1' || item.status == '4' || item.status == '5'){
                        temp.push(item);
                    }
                }else{
                    if(item.status == inputParams.status){
                        temp.push(item);
                    }
                }
            });
            resp.data.orderDetailList = temp;
        }
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
        const resp = await service.orders.settlement(inputParams.product);
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