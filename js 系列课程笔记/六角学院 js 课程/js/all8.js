
// if、 else if
// 定义饥饿程度
var hungry = 3;

// 定义函数 eat
function eat(food){
    console.log('我现在想吃'+food);
}

// 调用函数 eat
if(hungry <= 3){
    eat('披萨');
}else if(hungry < 7&& hungry > 3){
    eat('苹果');
}else{
    eat('汉堡');
}


// switch
var light = 'blue';

function lightFun(str){
    console.log('目前是'+ str +'警戒');
}
switch(light){
    case 'red':
        alert('红色警戒');
        alert('快跑！');
        break;


    case 'blue':
        lightFun(light);
        break;                 // break 代表如果该条件满足且执行了之后下面的代码就不执行了，而 if 语句是把所有循环体执行一遍

     // 如果上述条件都没有满足则用 default
    default:
        alert('没有任何资料');
        break;
}