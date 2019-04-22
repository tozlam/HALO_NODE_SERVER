const Controller = require('egg').Controller;
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

class ForumController extends Controller {
    async getToken(){
        const {ctx, service} = this;
        let token = ctx.session.token;
        let resp = {
            code: "0",
            message: "SUCCESS",
            data: token
        }
        ctx.body = {
            data:resp
        };
    }
    async getAllTopic(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.getAllTopic(inputParams.pageNum,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }
    async getTopicDetail(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.getTopicDetail(inputParams.id,inputParams.pageNum,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }
    async getType(){
        const {ctx, service} = this;
        const resp = await service.forum.getType();
        ctx.body = {
            data:resp
        };
    }

    async getTypePage(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.getTypePage(inputParams.id,inputParams.pageNum,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }
    async handleImg(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let mypath = inputParams.path.slice(22);
        let realPath = path.resolve('./app/' + mypath);
        let bitmap = fs.readFileSync(realPath);
        let base64str = Buffer.from(bitmap, 'binary').toString('base64');
        const dataParam = {
            image: base64str
        }
        const resp = await service.common.imageSave(dataParam);
        if(resp.errorCode == 0){
            fs.unlinkSync(realPath);
        }
        ctx.body= {
            data:resp
        }
    }
    async newTopic(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.newTopic(inputParams);
        ctx.body = {
            data:resp
        };
    }
    async newBack(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.newBack(inputParams);
        ctx.body = {
            data:resp
        };
    }
    async updateTopic(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.updateTopic(inputParams);
        ctx.body = {
            data:resp
        };
    }
    async delTopic(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.delTopic(inputParams.id);
        ctx.body = {
            data:resp
        };
    }
    async getMessage(){
        const {ctx, service} = this;
        const resp = await service.forum.getMessage();
        if(resp.code == 0){
            _.each(resp.data.backs,item => {
                let content = item.content;
                content = content.replace(/<img(([\s\S])*?)alt(([\s\S])*?)>/g, "[图片]");
                content = content.replace(/<img(([\s\S])*?)>/g, "[表情]");
                content = content.replace(/<blockquote(([\s\S])*?)<\/blockquote>/g, "");
                content = content.replace(/(\n)/g, "");
                content = content.replace(/(\t)/g, "");
                content = content.replace(/(\r)/g, "");
                content = content.replace(/<\/?[^>]*>/g, "");
                content = content.replace(/\s*/g, "");
                item.content = content;
            });
            resp.data.backs.reverse();
        }
        ctx.body = {
            data:resp
        };
    }

    async searchTopic(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let param = encodeURI(inputParams.key);
        const resp = await service.forum.searchTopic(param,inputParams.pageNum,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }

    async delBack(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.forum.delBack(inputParams.id);
        ctx.body = {
            data:resp
        };
    }
}
module.exports = ForumController;