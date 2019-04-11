const Controller = require('egg').Controller;
const _ = require('lodash');
const fs = require('fs');
const FormStream = require('formstream');

class UserController extends Controller {
    async loginVerifyPhone(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.auths.verifyPhone(inputParams.phone);
        ctx.body = {
            data:resp
        };
    }

    async loginByPwd(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let resp = await service.auths.loginByPwd(inputParams);
        if (resp.errorCode == 0) {
            ctx.session.token = resp.data['access_token'];
            ctx.session.expireTime = new Date().getTime() + 59 * 60 * 1000;
            resp = await service.users.userData();
            resp.token = ctx.session.token;
        }

        ctx.body = {
            data:resp
        };
    }

    async loginByCode() {
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let resp = await service.auths.loginByCode(inputParams);
        if (resp.errorCode == 0) {
            ctx.session.token = resp.data['access_token'];
            ctx.session.expireTime = new Date().getTime() + 59 * 60 * 1000;
            resp = await service.users.userData();
            resp.token = ctx.session.token;
        }

    ctx.body = {
        data:resp
    };
}

    async loginRequestSmsCode(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.auths.requestSmsCode(inputParams.phone);
        ctx.body = {
            data:resp
        };
    }

    async regVerifyPhone(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.registers.verifyPhone(inputParams.phone);
        ctx.body = {
            data:resp
        };
    }

    async regRequestSmsCode(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.registers.requestSmsCode(inputParams.phone);
        ctx.body = {
            data:resp
        };
    }

    async regVerifyCode(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.registers.verifyCode(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async registerByPhone(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.registers.registerByPhone(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async userData(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.users.userData();
        ctx.body = {
            data:resp
        };
    }

    async updatePwd(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let params = inputParams.data;

        const resp = await service.users.updatePwd(params);
        ctx.body = {
            data:resp
        };
    }

    async verifyPwd(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.users.verifyPwd(inputParams.pwd);
        ctx.body = {
            data:resp
        };
    }

    async updateEmail(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let params = inputParams.data;

        const resp = await service.users.updateEmail(params);
        ctx.body = {
            data:resp
        };
    }

    async updatePhone(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let params = inputParams.data;

        const resp = await service.users.updatePhone(params);
        ctx.body = {
            data:resp
        };
    }

    async requestEmailVerify(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let params = inputParams.data;

        const resp = await service.users.requestEmailVerify(params);
        ctx.body = {
            data:resp
        };
    }

    async coinData(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.users.coinData();
        ctx.body = {
            data:resp
        };
    }

    async chargeCoin(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let params = inputParams.data;

        const resp = await service.users.chargeCoin(params);
        ctx.body = {
            data:resp
        };
    }

    async saveAvatar(){
        const {ctx, service,app} = this;
        const inputParams = ctx.request.body;
        let token = ctx.session.token;
        let resp;
        var imgData = inputParams.img;
        var base64Data = imgData.replace(/^data:image\/\w+;base64,/, "");
        const dataParam = {
            image: base64Data
        }
        const saveResp = await service.common.imageSave(dataParam);
        if(saveResp.errorCode == 0){
            let param = encodeURI(saveResp.data.imgUrl);
            resp = await service.users.saveAvatar(param);
        }else{
            resp = saveResp;
        }

        ctx.body = {
            data:resp
        };
    }

    async getAddress(){
        const {ctx, service} = this;

        const resp = await service.users.getAddress();
        ctx.body = {
            data:resp
        };
    }

    async delAddress(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.users.delAddress(inputParams.id);
        ctx.body = {
            data:resp
        };
    }

    async updateAddress(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.users.updateAddress(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async addAddress(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;

        const resp = await service.users.addAddress(inputParams);
        ctx.body = {
            data:resp
        };
    }

    async logout(){
        const {ctx, service} = this;
        ctx.session.token = null;
        ctx.body = {
            data:{
                errorCode:0
            }
        }
    }

}

module.exports = UserController;