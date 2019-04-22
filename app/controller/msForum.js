const Controller = require('egg').Controller;
const path = require('path');
const _ = require('lodash');
const fs = require('fs');

class MsForumController extends Controller {
    async getTopicList(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.topicmanage.getTopicList(inputParams.pageNum,inputParams.pageSize);
        if(resp.code == 0){
            _.each(resp.data.topics,item => {
                if(!item.lastTime){
                    item.lastTime = '-';
                }
                if(!item.backNumber){
                    item.backNumber = 0;
                }
                if(!item.avatar){
                    item.avatar = '-'
                }
                if(!item.lastBack){
                    item.lastBack = '-'
                }
            })
        }
        ctx.body = {
            data:resp
        };
    }

    async getTopicDetail(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let resp = {};
        const respDetail = await service.topicmanage.getTopicDetail(inputParams.id);
        if(respDetail.code == 0){
            respDetail.data.gmtCreate = respDetail.data.gmtCreate.slice(0,19);
            respDetail.data.gmtCreate = respDetail.data.gmtCreate.replace('T',' ');
            const respBack = await service.topicmanage.getTopicBack(inputParams.id,inputParams.pageNum,inputParams.pageSize);
            if(respBack.code == 0){
                resp = {
                    code:"0",
                    message: "SUCCESS",
                    data:{
                        topic:respDetail.data,
                        backs:respBack.data.backs,
                        count:respBack.data.count
                    }
                }
            }
        }
        ctx.body = {
            data:resp
        };
    }

    async searchTopic(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let keyword = encodeURI(inputParams.keyword);
        const resp = await service.topicmanage.searchTopic(keyword,inputParams.pageNum,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }

    async topicBack(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.topicmanage.getTopicBack(inputParams.id,inputParams.pageNum,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }

    async delTopic(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let ids = encodeURI(inputParams.ids);
        const resp = await service.topicmanage.delTopic(ids);
        ctx.body = {
            data:resp
        };
    }

    async delBack(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        let ids = encodeURI(inputParams.ids);
        const resp = await service.topicmanage.delBack(ids);
        ctx.body = {
            data:resp
        };
    }

    async getType(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.topicmanage.getType();
        ctx.body = {
            data:resp
        };
    }

    async searchByType(){
        const {ctx, service} = this;
        const inputParams = ctx.request.body;
        const resp = await service.topicmanage.searchByType(inputParams.id,inputParams.pageNum,inputParams.pageSize);
        ctx.body = {
            data:resp
        };
    }
}
module.exports = MsForumController