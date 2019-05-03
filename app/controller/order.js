'use strict';

const Service = require('egg').Service;
const _ = require('lodash');
const constants = require('../constants/index');

class OrderService extends Service {
    async myOrder(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let resp = await service.orders.myOrder();
        if(resp.errorCode == 0 && resp.data && resp.data.orderDetailList){
            if(inputParams.status !== 'all'){
                let temp = [];
                _.each(resp.data.orderDetailList,item => {
                    if(inputParams.status === 'other'){
                        if(item.status == '1' || item.status == '4' || item.status == '5'){
                            item.statusName = constants.ORDER_TYPE[item.status];
                            temp.push(item);
                        }
                    }else{
                        if(item.status == inputParams.status){
                            item.statusName = constants.ORDER_TYPE[item.status];
                            temp.push(item);
                        }
                    }
                });
                resp.data.orderDetailList = temp;
            }else{
                _.each(resp.data.orderDetailList,item => {
                    item.statusName = constants.ORDER_TYPE[item.status];
                });
            }
           resp.data.orderDetailList = _.orderBy(resp.data.orderDetailList,'gmtCreate','desc');
        }
        ctx.body = {
            data:resp
        };
    }

    async indexOrderNum(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let resp = await service.orders.myOrder();
        if(inputParams.status !== 'all'){
            let unSend = [];
            let sent = [];
            _.each(resp.data.orderDetailList,item => {
                    if(item.status == '2'){
                        unSend.push(item);
                    }else if(item.status == '3'){
                        sent.push(item);
                    }
            });
            resp.data = {
                unsent:unSend.length,
                sent:sent.length
            }
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