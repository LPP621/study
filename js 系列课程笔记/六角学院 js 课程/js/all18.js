

var el = document.querySelector('.btn');



// e 代表 event，是 jQuery 会传进来的第一个参数，指向了当前发生的事件（click、mouseover等等），保存了当前事件的信息。如鼠标点击事件，有鼠标的坐标信息'
// e 可加可不加，如果后面需要获取操作的信息 就要加e 如果不需要，只是完成一个事件，就可以不加e
el.onclick = function(e){
    console.log(e);
    alert("hello");
};