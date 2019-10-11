import './popUpHint.less';


class AlertModule {

    popUpHint = (state) => {
        let type = document.getElementById('popUpHint');
        if(type !== null){
            return;
        }
        if(state === true){
            // 1、查找 body 元素标签
            let body = document.body;
            // 2、 创建一个 父级 div
            let div = document.createElement("div");
            // 3、 为创建的 父级 div 添加 必要的 id 类
            div.setAttribute('id', 'popUpHint');
            // 4、 在创建的 父级 div 中添加必要 子级 HTML 元素
            div.innerHTML = '<div class="popUpHint_content bounceInDown animated">' +
                '<div class="popUpHint_content_top">系统提示</div>' +
                '<div class="popUpHint_content_center">我是中间层</div>'+
                '<div onclick="(function() { document.body.removeChild(document.getElementById(\'popUpHint\')) })()" class="popUpHint_content_bottom">确定</div>' +
                '</div>';
            // 5、 将创建的 父级 div 添加到 body 中
            body.appendChild(div);
        }
        if(state === false){
            document.body.removeChild(document.getElementById('popUpHint'))
        }
    }

}


const alertModule = new AlertModule();

export default alertModule;