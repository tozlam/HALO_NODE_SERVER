const Controller = require('egg').Controller;
const _ = require('lodash');

class CartController extends Controller {
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
            ctx.body = {
                data:resp.result
            };
        }else{
            ctx.body = {
                data:resp
            };
        }
    }

    async updateCart(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.carts.updateCart(inputParams.params,inputParams.proId);
        if(resp.cookie){
            resp.result.cookie = resp.cookie;
            ctx.body = {
                data:resp.result
            };
        }else{
            ctx.body = {
                data:resp
            };
        }
    }

    async delCart(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.carts.delCart(inputParams.proId);
        if(resp.cookie){
            resp.result.cookie = resp.cookie;
            ctx.body = {
                data:resp.result
            };
        }else{
            ctx.body = {
                data:resp
            };
        }

    }

}
module.exports = CartController;