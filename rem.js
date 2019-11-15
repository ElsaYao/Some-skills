//开启页面监听
(function PageResize() {
    (function GetSize() {
        var width = document.documentElement.clientWidth || window.innerWidth || document.body.clientWidth;
        //var width = $(window).width() || $html.width();
        width > 750 ? width = 750 : null;
        width < 320 ? width = 320 : null;
        /*$html.css({
            'font-size': (width * (100 / 750)) + 'px'
        });*/
        document.getElementsByTagName("html")[0].style.fontSize = (width * (100 / 750)) + 'px';
        // 如果窗口大小没有改变
        if (!window.onresize) {
            window.onresize = function() {
                onFooEndFunc(GetSize);
            }
        }
    })();
    //延迟运行计算
    var executionTimer;
    var onFooEndFunc = function(fn) {
        var delay = 1; // 当窗口改变的时候一毫秒就改变html的fontsize大小(根据实际情况可调整延时时间)
        if (!!executionTimer) {
            clearTimeout(executionTimer);
        }
        //这里延时执行你的函数
        executionTimer = setTimeout(function() {
            fn();
        }, delay);
    };
})();
//接收url参数
function UrlSearch() {
    var name, value;
    //取得整个地址栏
    var str = location.href; //url地址
    //str = str.split("#")[1];
    if (str) {
        var num = str.indexOf("?");
        //取得所有参数
        str = str.substr(num + 1);
        //各个参数放到数组里
        var arr = str.split("&");
        for (var i = 0; i < arr.length; i++) {
            num = arr[i].indexOf("=");
            if (num > 0) {
                name = arr[i].substring(0, num);
                value = arr[i].substr(num + 1);
                this[name] = value;
            }
        }
    }
}
