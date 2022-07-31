'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller, middleware } = app;
  const counter = middleware.counter();
  router.get('/', counter, controller.home.index);
  router.get('/girl', controller.home.girl);
  router.get('/girlName/:name', controller.home.girlName);
  router.post('/add', controller.home.add);
  router.get('/getGirl', controller.home.getGirl);
};
