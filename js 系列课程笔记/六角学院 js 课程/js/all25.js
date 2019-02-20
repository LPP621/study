var el = document.querySelectorAll('.box');
var Len = el.length;
for(var i=0;i<Len;i++){
    el[i].addEventListener('mouseover',function (e) {
        alert('game over！');
    },false)
}