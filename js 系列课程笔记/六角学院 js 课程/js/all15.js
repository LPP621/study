var farms = [
    {
        farmer: '卡斯伯',
        dogs: ['詹姆士', '汤姆']
    },
    {
      farmer: '皮特',
      dog: ['约翰']
    }
];


// 由于innerHTML 每次循环的时候都会把上次所加入的内容替代，所以需要定义一个空字符串 str 将所有的 innerHTML 加起来全部输出

var el = document.querySelector('.list');
var str = '';
for (var i=0;i<farms.length;i++){
    var content='<li>'+farms[i].farmer+'</li>';
    str+=content;
    // console.log(str);
}

// 加完之后就输出显示在页面上
el.innerHTML = str;