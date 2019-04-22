const Controller = require('egg').Controller;
const _ = require('lodash');
const constants = require('../constants/index');

class MsOrderController extends Controller {

    async getOrder(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.getOrder(inputParams.pageSize,inputParams.pageIndex);
        if(resp.data){
            _.each(resp.data.orders,item => {
                item.statusName = constants.ORDER_TYPE[item.status];
              });
            resp.data.orders = _.orderBy(resp.data.orders,'createTime','desc');
        }
        ctx.body = {
            data:resp
        };
    }

    async updateOrderStatus(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.updateOrderStatus(inputParams.id,inputParams.status);
        if(resp.code == 0){
            resp.data = constants.ORDER_TYPE[inputParams.status]
        }
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
        const resp = await service.ordermanage.searchOrderByStatus(status,pageIndex,pageSize);
        if(resp.data){
            _.each(resp.data.orders,item => {
                item.statusName = constants.ORDER_TYPE[item.status];
            });
        }
        ctx.body = {
            data:resp
        };
    }

    async updateShipment(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.updateShipment(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async searchOrderById(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.searchOrderById(inputParams.id);
        ctx.body = {
            data:resp
        };
    }

    async getOrderDetail(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.ordermanage.getOrderDetail(inputParams.id);
        if(resp.data){
            resp.data.statusName = constants.ORDER_TYPE[resp.data.status];
        }
        ctx.body = {
            data:resp
        };
    }

}
module.exports = MsOrderController;