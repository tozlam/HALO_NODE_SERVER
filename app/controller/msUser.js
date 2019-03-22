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