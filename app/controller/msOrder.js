const Controller = require('egg').Controller;
const _ = require('lodash');

class MsOrderController extends Controller {
    async getOrderPage(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.getOrderPage(inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }

    async getOrder(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.getOrder(inputParams.pageSize,inputParams.pageIndex);
        ctx.body = {
            data:resp
        };
    }

    async updateOrderStatus(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.updateOrderStatus(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async searchOrder(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const status = inputParams.status;
        const pageSize = inputParams.pageSize;
        const pageIndex = inputParams.pageIndex;
        const resp = await service.ordermanage.searchOrder(status,pageIndex,pageSize);
        ctx.body = {
            data:resp
        };
    }

}
module.exports = MsOrderController;