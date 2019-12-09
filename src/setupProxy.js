const proxy = require('http-proxy-middleware');

module.exports = function(app){
    app.use(
        '/api',
        proxy({
            target:'https://api.zcool.com.cn/v2',
            changeOrigin:true
        })
    ),
    app.use(
        '/v1',
        proxy({
            target:'https://opser.api.dgtle.com',
            changeOrigin:true
        })
    )
}