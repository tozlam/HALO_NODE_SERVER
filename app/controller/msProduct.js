const Controller = require('egg').Controller;
const _ = require('lodash');

class MsProductController extends Controller {
   async searchProduct(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
       let key = encodeURI(inputParams.key);
        const resp = await service.productmanage.searchProduct(key,inputParams.pageNum,inputParams.pageSize);
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
       if(resp.data){
           _.each(resp.data.items,item => {
               let create = new Date(item.gmtCreate);
               item.createTime = create.toLocaleDateString() + " " + create.toTimeString().substr(0, 8);
               let update = new Date(item.gmtUpdated);
               item.updateTime = update.toLocaleDateString() + " " + update.toTimeString().substr(0, 8);
           });
       }
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