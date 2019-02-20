
// false —— bubbling 冒泡传递 —— 从指定元素往外找

var elDiv = document.querySelector('.box');
elDiv.addEventListener('click',function (e) {
    e.stopPropagation();        // 阻止事件冒泡
    alert('box');
    console.log('box');
},false);

var elBody = document.querySelector('.body');
elBody.addEventListener('click',function () {
    alert('body');
    console.log('body');
},false);

// true —— capturing 捕获传递 —— 从外往指定元素找
/*
var elDiv = document.querySelector('.box');
elDiv.addEventListener('click',function () {
    alert('box');
    console.log('box');
},true);

var elBody = document.querySelector('.body');
elBody.addEventListener('click',function () {
    alert('body');
    console.log('body');
},true);
*/