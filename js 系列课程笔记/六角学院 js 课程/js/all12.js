

// var el = document.getElementById('titleId');
// 相当于：




// querySelector 是选取一个元素
// var el = document.querySelector('.titleClass em');   // 可以加一个类和 em 元素
// el.textContent = '1234';




// querySelectorAll 可重复选择多个元素

var el = document.querySelectorAll('.titleClass em');   // 可以加一个类和 em 元素
el[0].textContent = '1234';
el[1].textContent = '12';

var elLen = el.length;

for(var i=0;i<elLen;i++){
    el[i].textContent = i+'1213';
}
