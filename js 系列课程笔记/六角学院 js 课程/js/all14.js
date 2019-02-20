
// innerHTML 会先把所要改变的 h1 里面的信息清空然后再按后面的内容重新设置 h1 属性


var el=document.getElementById('main');
el.innerHTML = '<h1 style="color: red;">1234567</h1>' + '<h2 style="color: aqua;">标题2</h2>';



/*
var el1 = document.querySelector('.list');
el1.innerHTML = '<li><a href="https://www.google.com" target="_blank">谷歌</a></li>';
*/

// 上面两行代码相当于
var el1 = document.querySelector('.list');
var link = 'https://www.google.com';
var name = '谷歌';
el1.innerHTML = '<li><a href="'+link+'">' + name + '</a></li>';