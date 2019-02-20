
// 增加 html 标签的元素
var str = document.createElement("em");
str.textContent = '1234';

// 也可以新增属性
// str.setAttribute('','');

// 动态增加子节点
document.querySelector('.title').appendChild(str);