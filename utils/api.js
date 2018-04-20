var config=require('./config')
module.exports = {
    case: config.HTTP_HOST + '/api/case',
    case_category:config.HTTP_HOST+'/api/case_category',
    designer: config.HTTP_HOST + '/api/designer',
}