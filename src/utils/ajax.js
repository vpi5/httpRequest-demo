import $ from 'jquery';

let base = 'https://trade.moni.xinyusoft.com/trade/ESBServlet';

const apiUrl = function (url) {
    return base + url;
};

let defaultAjax = function (type, url, data, callBack) {
    $.ajax({
        type : type,
        url : apiUrl(url),
        data : data,
        success : function (data) {
            callBack(data);
        },
        error : function (err) {
            alert('发生错误！', err)
        }
    })
};

class Ajax {

    get = function (url, data, callBack) {
        defaultAjax('get', url, data, callBack);
    };

    post = function (url, data, callBack) {
        defaultAjax('post', url, data, callBack);
    };

}

const ajax = new Ajax();

export default ajax;


