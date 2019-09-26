//let base = "http://210.21.237.151:888";
let base = "quote.cmschina.com";

export default {
    // umi config
    publicPath : "./",
    history: 'hash',
    context : {
        title:''
    },
    targets:{ios:8},
    autoprefixer:{
        flexbox: true,
    },
    theme: './src/utils/theme/theme-default-config.js',
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
