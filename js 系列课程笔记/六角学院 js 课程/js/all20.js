
// 绑定 onclick 事件的时候，下面的事件会把前面的事件给覆盖

var elOn = document.querySelector('.btnOn');
elOn.onclick=function(){
    alert('on-1');
};
elOn.onclick=function(){
    alert('on-2');
};


//绑定 addEventListener 事件的时候，会依次执行下面的代码,不会出现覆盖的情况

var elAdd = document.querySelector('.btnAdd');
elAdd.addEventListener('click',function () {
    alert('add-1');
},false);
elAdd.addEventListener('click',function () {
    alert('add-2');
});
elAdd.addEventListener('click',function () {
    alert('add-3');
});