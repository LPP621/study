// 定义一个函数，用来向一个元素中添加指定的 class 属性值
/*
* 参数：
*    obj : 要添加 class 属性的元素
*    cn : 要添加的 class 的值
*/
function addClass(obj,cn) {

    // 检查 obj 中是否含有 cn
    if(!hasClass(obj,cn)){
        obj.className += " "+cn;
    }
}

/*
*  判断一个元素中是否含有指定的 class 属性值
*  如果有该 class，则返回 true，没有则返回 false
*/
function hasClass(obj,cn) {

    // 判断 obj 中有没有 cn class
    // 创建一个正则表达式
    var reg = new RegExp("\\b"+cn+"\\b");
    return reg.test(obj.className);
}

/*
* 删除一个元素中的指定的 class 属性
*/
function removeClass(obj,cn) {

    // 创建一个正则表达式
    var reg = new RegExp("\\b"+cn+"\\b");

    //删除 class
    obj.className = obj.className.replace(reg,"");

}

/*
* toggleClass 切换一个类
*/
function toggleClass(obj,cn) {

    // 判断 obj 中是否含有 cn
    if (hasClass(obj,cn)){
        // 有则删除
        removeClass(obj,cn);
    } else {
        addClass(obj,cn);
    }
}