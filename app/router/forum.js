'use strict';

/**
 * @param {Egg.RuleData} app - egg application
 */
module.exports = app => {
    const {
        router,
        controller,
        middleware
    } = app;

    const authLogin = middleware.authLogin();
    const {forum} = controller;

    router.get('/api/forum/getToken',authLogin, forum.getToken);
    router.post('/api/forum/getAllTopic',forum.getAllTopic);
    router.post('/api/forum/getTopicDetail',forum.getTopicDetail);
    router.get('/api/forum/getType',forum.getType);
    router.post('/api/forum/getTypePage',forum.getTypePage);
    router.post('/api/forum/handleImg',forum.handleImg);
    router.post('/api/forum/newTopic',forum.newTopic);
    router.post('/api/forum/newBack',forum.newBack);
    router.post('/api/forum/updateTopic',forum.updateTopic);
    router.post('/api/forum/delTopic',forum.delTopic);
    router.get('/api/forum/getMessage',forum.getMessage);
};
