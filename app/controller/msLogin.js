const Controller = require('egg').Controller;
const _ = require('lodash');

class MsLoginController extends Controller {
    async verityUser(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.admins.verityUser(inputParams.user);
        ctx.body = {
            data:resp
        };
    }

    async loginByPwd(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.admins.loginByPwd(inputParams);
        ctx.body = {
            data:resp
        };
    }
}

module.exports = MsLoginController;