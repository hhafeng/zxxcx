var config=require('./config')
module.exports = {
    case: config.HTTP_HOST + '/api/case',
    case_category:config.HTTP_HOST+'/api/case_category',
    designer: config.HTTP_HOST + '/api/designer',
    article: config.HTTP_HOST + '/api/article',
    adv: config.HTTP_HOST + '/api/adv',
    topic: config.HTTP_HOST + '/api/topic',
    nav: config.HTTP_HOST + '/api/nav',
    profile: config.HTTP_HOST + '/api/profile',
    tool: config.HTTP_HOST + '/api/tool',
    baojia: config.HTTP_HOST + '/api/baojia'
}