'use strict';

/**
 * @param {Egg.Application} app - egg application
 */

const ueditor = require('egg-ueditor')
module.exports = app => {
  require('./router/user')(app)
  require('./router/product')(app)
  require('./router/order')(app)
  require('./router/carts')(app)
  require('./router/ms')(app)
  app.all('/ueditor', ueditor());
};
