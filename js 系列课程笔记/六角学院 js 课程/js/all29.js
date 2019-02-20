// localStorage 只会保存 string 资料

// 1. 将 array 转为 string
// JSON.stringify()


// 2. 将 string 转为 array
// JSON.parse()

//1、先定义一个数组
var country = [
    {farmer: '卡斯伯'}
    ];


// 一、直接取出数组元素
console.log(country[0].farmer);


// 二、间接取出数组元素

var countryString = JSON.stringify(country);              // 2、将数组转为字符串类型
// console.log(countryString);

localStorage.setItem('countryItem',countryString);        // 3、使用 localStorage 创建一个本地存储的 name/value 对，name="countryItem" value="countryString"
                                                         // 将 countryString 的信息（字符串）存储到 countryItem 中
var getData = localStorage.getItem('countryItem');      // 检索
// console.log(getData);

var getDataAry = JSON.parse(getData);                      // 4、将字符串转为数组，方便取出数组元素
console.log(getDataAry[0].farmer);