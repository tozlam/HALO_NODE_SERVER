/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1551256594845_5003';

  // add your middleware config here
  config.middleware = [];

  config.session = {
    key: 'EGG_SESS', // key 代表了存储 Session 的 Cookie 键值
    maxAge: 1 * 3600 * 1000, // 1 小时
    httpOnly: true, //只能通过node访问
    encrypt: true, //加密
    //signed: false
  };

  // 服务配置
  config.serverConf = {
    'HALO_BE': 'http://123.207.121.122:8868/api',
  };

  config.bodyParser = {
    jsonLimit: '5mb',
    formLimit: '6mb',
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return config;
};
