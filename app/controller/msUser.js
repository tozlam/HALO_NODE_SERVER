const Controller = require('egg').Controller;
const _ = require('lodash');

class MsUserController extends Controller {
    async getUserPage(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.usermanage.getUserPage(inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }

    async delUser(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.usermanage.delUser(inputParams.id);
        ctx.body = {
            data:resp
        };
    }

    async getUser(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.usermanage.getUser(inputParams.pageIndex,inputParams.pageSize);
        if(resp.data){
            _.each(resp.data.users,item => {
                let create = new Date(item.gmtCreate);
                item.createTime = create.toLocaleDateString() + " " + create.toTimeString().substr(0, 8);
                let update = new Date(item.gmtUpdate);
                item.updateTime = update.toLocaleDateString() + " " + update.toTimeString().substr(0, 8);
            });
        }
        ctx.body = {
            data:resp
        };
    }

    async searchUser(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.usermanage.searchUser(inputParams.key);
        ctx.body = {
            data:resp
        };
    }
}
module.exports = MsUserController;