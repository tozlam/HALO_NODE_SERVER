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
    maxAge: 24 * 3600 * 1000, // 1 天
    httpOnly: true, //只能通过node访问
    encrypt: true, //加密
    //signed: false
  };

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return config;
};
