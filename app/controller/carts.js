'use strict';

const Service = require('egg').Service;
const _ = require('lodash');

class CartsService extends Service {
    async getCart(){
        const {ctx, service} = this;
        const resp = await service.carts.getCart();
        ctx.body = {
            data:resp
        };
    }

    async addCart(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let resp = await service.carts.addCart(inputParams);
        if(resp.cookie){
            resp.result.cookie = resp.cookie;
        }
        ctx.body = {
            data:resp.result
        };
    }

    async updateCart(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.carts.updateCart(inputParams.params,inputParams.proId);
        if(resp.cookie){
            resp.result.cookie = resp.cookie;
        }
        ctx.body = {
            data:resp.result
        };
    }

    async delCart(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.carts.delCart(inputParams.proId);
        if(resp.cookie){
            resp.result.cookie = resp.cookie;
        }
        ctx.body = {
            data:resp.result
        };
    }

}
module.exports = CartsService;