##### 项目集成 react16 umi集成路由  antd UI组件库 dayjs时间插件

# 安装依赖

    npm install || yarn install

# 启动本地开发环境服务

    npm start || yarn start     ==> 启动项目
    
    ps:默认端口为3015，可在.env文件中进行自行修改
    
# 打包测试代码

    npm build     ==> 打包项目

## webpack config 等配置写在.umirc.js中

## 所有公共组件创建在src/components中

# 必要的规范：
#### 所有className,id,文件名以及方法名请使用小驼峰命名
    例如： className='myCompnent' myUtil.js
          
#### 组件文件夹和组件名称请使用小驼峰命名

    例如： myComponent

#### 所有有属性请使用单引号

    例如: className={'myComponent'}
    
#### 对于JSX语法，props少的可以一行，多的遵循下面的对齐风格。
    
    1、let {name, age} = this.state;
    2、let {data, id} = this.props;


#### src路径表

    src  components(公共组件)  pages(默认index路径)
    .umi            临时文件 不进行打包
    loading         加载动画页

#### 打包需要抛弃的配置

    externals : {
        "jquery" : "jQuery" ,
        "echarts" : "echarts" ,
        "moment" : "moment" ,
        "react" : "React" ,
        "react-dom" : "ReactDOM"
    },
    
#### 是否兼容到 IE 9
    
    .umirc.js中添加 targets: {ie: 9},
    
#### 是否兼容到 IOS8

    targets:{ios:8},
        autoprefixer:{
            flexbox: true,
        },

#### 主题样式控制文件

    src/utils/theme 文件夹中
    命名格式：`theme-${启动名称}-config.js`
    对应的启动文件名称为： `.umirc.${启动名称}.js`
    改相应的问题时 应将启动名称与主题样式文件对应。