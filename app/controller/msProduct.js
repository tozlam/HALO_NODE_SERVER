const Controller = require('egg').Controller;
const _ = require('lodash');

class MsProductController extends Controller {
   async searchProduct(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.productmanage.searchProduct(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async getProductPage(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.productmanage.getProductPage(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async delProduct(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.productmanage.delProduct(inputParams.id);
        ctx.body = {
            data:resp
        };
    }

    async updateProduct(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.productmanage.updateProduct(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async getProduct(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.productmanage.getProduct(inputParams.pageIndex,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }

    async multiDelProduct(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const params = inputParams.join();
        const resp = await service.productmanage.multiDelProduct(params);
        ctx.body = {
            data:resp
        };
    }

}
module.exports = MsProductController;