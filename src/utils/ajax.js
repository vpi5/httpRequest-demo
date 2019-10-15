import $ from 'jquery';

let base = 'https://trade.moni.xinyusoft.com/trade/ESBServlet';

const apiUrl = function (url) {
    return base + url;
};

class Ajax {

    POST = (url, data, callBack) => {
        $.ajax({
            type : 'post',
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

    GET = (url, data, callBack) => {
        $.ajax({
            type : 'get',
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

}
const ajax = new Ajax();

export default ajax;


