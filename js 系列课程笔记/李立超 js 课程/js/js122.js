// 尝试创建一个可以执行简单动画的函数
/*
* 参数：
*   obj: 要执行的动画的对象
*   attr: 要执行的动画的样式,比如：left  width  top height
*   target: 执行动画的目标位置
*   speed: 移动的速度（正数向右移动，负数向左移动）
*   callback:  回调函数，将会在动画执行完毕以后执行
*/
function move(obj,attr,target,speed,callback) {

    // 在开启定时器之前，需要将当前元素的其他定时器关闭
    clearInterval(obj.timer);

    // 获取元素目前的位置
    var current = parseInt(getStyle(obj,attr));

    if (current >target){
        // 此时速度应为负
        speed = -speed;
    }
    obj.timer = setInterval(function () {
        var oldValue = parseInt(getStyle(obj,attr));
        var newValue = oldValue + speed;

        if ((speed < 0 && newValue < target) || (speed > 0 && newValue >target)){
            newValue = target;
        }

        obj.style[attr] = newValue + "px";    // attr 是个变量，需要用 []
        if (newValue == target){

            // 达到目标，关闭定时器
            clearInterval(obj.timer);

            // 动画执行完毕，调用回调函数（如果有就调用，没有就不调用）
            callback && callback();
        }
    },30);
}
/*
*  定义一个函数，用来获取指定元素的当前的样式
*  参数：
*       obj 要获取样式的元素
*       name  要获取的样式名
*/
function getStyle(obj,name) {
    if (window.getComputedStyle){
        // 正常浏览器的方式
        return getComputedStyle(obj,null)[name];
    }else {
        // IE8 的方式
        return obj.currentStyle[name];
    }
}
