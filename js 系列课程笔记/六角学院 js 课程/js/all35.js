document.querySelector('.hero').style.height = window.innerHeight+"px";


// 可以根据用户收缩屏幕的大小变换图片尺寸
window.onresize = function(){
    document.querySelector('.hero').style.height = window.innerHeight+"px";
}