const Controller = require('egg').Controller;
const _ = require('lodash');

class MsIndexController extends Controller {
    async firstPage(){
        const {ctx, service} = this;
        const resp = await service.firstpage.firstPage();
        ctx.body = {
            data:resp
        };
    }
}
module.exports = MsIndexController;