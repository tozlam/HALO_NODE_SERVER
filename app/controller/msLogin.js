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
        if (resp.code == 0) {
            ctx.session.token = resp.data;
            ctx.session.expireTime = new Date().getTime() + 59 * 60 * 1000;
        }
        ctx.body = {
            data:resp
        };
    }

    async logout(){
        const {ctx, service} = this;
        ctx.session.token = null;
        ctx.body = {
            data:{
                code:0
            }
        }
    }
}

module.exports = MsLoginController;