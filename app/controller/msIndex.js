const Controller = require('egg').Controller;
const _ = require('lodash');

class MsIndexController extends Controller {

    async orderChartData() {
        const {ctx, service} = this;
        let resp;
        const unpaidResp = await service.ordermanage.searchOrderByStatus(0,1,1);
        const paidResp = await service.ordermanage.searchOrderByStatus(1,1,1);
        const unsendResp = await service.ordermanage.searchOrderByStatus(2,1,1);
        const sentResp = await service.ordermanage.searchOrderByStatus(3,1,1);
        if(unpaidResp.code == 0 && paidResp.code == 0 && unsendResp.code == 0 && sentResp.code == 0){
            let temp = [unpaidResp.data.count,paidResp.data.count,unsendResp.data.count,sentResp.data.count];
            ctx.body = {
                data:{
                    code:0,
                    data:temp
                }
            };
        }else{
            ctx.body = {
                data:{
                    code:500,
                    message:'数据获取有误'
                }
            }
        }
    }

    async productChartData() {
        const {ctx, service} = this;
        const resp = await service.productmanage.getProduct(1,9999999);
        if(resp.code == 0){
            let eqt = 0,phone = 0,game = 0,listen = 0,power = 0,office = 0,living = 0;
            _.each(resp.data.products ,item => {
                if(item.cateName == '智能设备'){
                    eqt++;
                }else if(item.cateName == '手机'){
                    phone++;
                }else if(item.cateName == '游戏设备'){
                    game++;
                }else if(item.cateName == '数码影音'){
                    listen++;
                }else if(item.cateName == '手机配件/移动电源'){
                    power++;
                }else if(item.cateName == '移动存储/办公设备'){
                    office++;
                }else if(item.cateName == '生活周边'){
                    living++;
                }
            });
            let temp = [
                ['手机',phone],['智能设备',eqt],['数码影音',listen],['游戏手柄',game],['手机配件/移动电源',power],
                ['移动存储/办公设备',office],['生活周边',living]
            ]
            ctx.body = {
                data:{
                    code:0,
                    data:temp
                }
            };
        }else{
            ctx.body = {
                data:{
                    code:500,
                    message:'数据获取有误'
                }
            }
        }
    }


    async forumChartData(){
        const {ctx, service} = this;
        const getTypeResp = await service.topicmanage.getType();
        if(getTypeResp.code == 0){
            let temp = [];
            for(let i = 0,j = getTypeResp.data.types.length;i < j;i++){
                let dataResp = await service.topicmanage.searchByType(getTypeResp.data.types[i].typeId,1,1);
                if(dataResp.code == 0){
                    temp.push([getTypeResp.data.types[i].typeName,dataResp.data.count]);
                }
            }
            ctx.body = {
                data:{
                    code:0,
                    data:temp
                }
            };
        }else{
            ctx.body = {
                data:{
                    code:500,
                    message:'数据获取有误'
                }
            }
        }
    }
}
module.exports = MsIndexController;