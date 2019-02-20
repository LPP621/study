

var xhr = new XMLHttpRequest();

// readyState
// 0 - 已经产生一个 XMLHttpRequest，但是还没有连接到需要的资料
// 1 - 已经用了 open(), 但是还没有把资料传送过去
// 2 - 侦测到用了 send
// 3 - 资料在 loading
// 4 - 资料传输完成，数据也已经完全接收到了      responseText 里面会有资料


// true —— 非同步(异步)    不会等到资料传回来，程式码就继续往下执行了
// false —— 同步    等到资料传回来，程式码才会继续往下执行



// 格式、要读取的网址、同步与非同步
// 格式： get（读取资料）、post（传送资料到服务器类似询问服务器是否有这笔资料,服务器如果有这笔资料的话就会回传）
xhr.open('get','http://',true);

// 空的资料
xhr.send(null);

// 当确定资料有回传的时候（onload），就会执行下面的 function
xhr.onload = function () {
    console.log(xhr.responseText);
    var str = JSON.parse(xhr.responseText);
    document.querySelector('.message').textContent = str[0].name;
};

// 1、建立一个 xmlhttprequest
// 2、传送到对方服务器要资料
// 3、回传资料到自己的浏览器
// 4、拿到资料后再看要怎么处理