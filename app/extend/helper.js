'use strict';

const fs = require('fs');
const _ = require('lodash');

/**
 * 封装http请求
 */

exports.tdRequest = async function(ctx, url, method, params = {}, options = {}, header = false) {

    let requestParams = {
        method: method || 'GET',
        data: params|| {},
        contentType: options.contentType ||  'json',
        dataType: options.dataType || 'json',
        timeout: options.timeout || (1000 * 60 * 5)
    }
    Object.assign(requestParams, options); //深复制
    ctx.logger.info('request url: ' + url);
    ctx.logger.info('request params: ' + JSON.stringify(requestParams));

    const result = await ctx.curl(url, requestParams);
    if(result.data && result.data.hasOwnProperty('error')) {
        console.log(result.data)
        throw new Error(result.data.errorMsg || result.data.message);
    }
    if(header){
        return {
            cookie: result.headers['set-cookie'][0],
            result: result.data
        }
    }
    return result.data;
}
