const Controller = require('egg').Controller;
const _ = require('lodash');

class ProductController extends Controller {
    async productDetail(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.items.productDetail(inputParams.proId);
        ctx.body = {
            data:resp
        };
    }

    async getCategorys(){
        const {ctx, service} = this;
        const resp = await service.categorys.getCategorys();
        ctx.body = {
            data:resp
        };

    }

    async categorysDetail(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.categorys.categorysDetail(inputParams.cate);
        ctx.body = {
            data:resp
        };
    }

    async searchProduct(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let name = encodeURI(inputParams.name);
        const resp = await service.items.searchProduct(name);
        ctx.body = {
            data:resp
        };

    }

    async productByBrand(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.items.productByBrand(inputParams.brand);
        ctx.body = {
            data:resp
        };

    }

    async productByCateNBrand(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.items.productByCateNBrand(inputParams.cate,inputParams.brand);
        ctx.body = {
            data:resp
        };

    }

    async productByCate(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.items.productByCate(inputParams.cate);
        ctx.body = {
            data:resp
        };
    }

    async productList(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.items.productList(inputParams.page);
        ctx.body = {
            data:resp
        };
    }
}

module.exports = ProductController;