var screenX = document.querySelector('.screenX');
var screenY = document.querySelector('.screenY');
var pageX = document.querySelector('.pageX');
var pageY = document.querySelector('.pageY');
var clientX = document.querySelector('.clientX');
var clientY = document.querySelector('.clientY');




var el = document.getElementById('body');
el.addEventListener('mouseover',function(e) {
    screenX.textContent = e.screenX;
    screenY.textContent = e.screenY;
    pageX.textContent = e.pageX;
    pageY.textContent = e.pageY;
    clientX.textContent = e.clientX;
    clientY.textContent = e.clientY;
    console.log(pageX);
},false);



// 为什么只在 header 部分起作用？？？？？？？？？