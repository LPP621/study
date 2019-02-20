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
var el = document.querySelector('.list');
for(var i=0;i<farms.length;i++){
    var str = document.createElement('li');
    str.textContent = farms[i].farmer;
    el.appendChild(str);
}