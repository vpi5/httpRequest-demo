//let base = "http://210.21.237.151:888";
let base = "quote.cmschina.com";

export default {
    // umi config
    publicPath : "./",
    base: './',
    history: 'hash',
    context : {
        title:'',
        icoPaths: './static/GH.ico',
    },
    targets:{ios:8},
    autoprefixer:{
        flexbox: true,
    },
    theme: './src/utils/theme/theme-default-config.js',

    uglifyJSOptions(opts) {
        opts.uglifyOptions.compress.warnings = true;
        opts.uglifyOptions.compress.drop_console = true;
        opts.uglifyOptions.compress.drop_debugger = true;
        opts.uglifyOptions.pure_funcs = ['console.log'];
        return opts;
    },

    // 打包项目抛弃的 插件包 以内置如下工具包
    externals : {
       "jquery" : "jQuery" ,
       "echarts" : "echarts" ,
       "moment" : "moment" ,
       "react" : "React" ,
       "react-dom" : "ReactDOM"
    },

    chainWebpack(config, { webpack }) {
        config.optimization.splitChunks({
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -20
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        });
    },
    plugins : [
        ["umi-plugin-react",{
            pwa : {
                disableServiceWorker : true ,
            },
            dynamicImport : {
                webpackChunkName : true ,
                loadingComponent : "./pages/loading"
            },
            antd : true ,
            hardSource : true ,
            dll : false
        }]
    ],

    extraBabelPlugins: [
        ['import', { libraryName: 'antd', libraryDirectory: 'es', style: true }]
    ],

    //配置的 evn 选项
    define: {
        "process.env.theme" : "default",
        "process.env.homePage" : "pageHome"
    }
}
