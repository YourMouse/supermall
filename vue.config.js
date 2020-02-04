let path = require("path"); //定义别名时需要先找到src目录

module.exports = {
    configureWebpack: {
        resolve: {  //解决路径相关别名
            // extensions:{} //用来默认省略后缀名
            alias: {   //配置别名
                '@': path.resolve("src"),
                'assets': '@/assets',
                'common': '@/common',
                'components': '@/components',
                'network': '@/network',
                'views': '@/views'
            }
        }
    }
}