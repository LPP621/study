var country =[
    {
        farmer: '卡斯伯',

    },
    {
        farmer: '汤姆',

    },
    {
        farmer: '约翰',
    }
];
var list = document.querySelector('.list');

// 更新农场资料
function updateList() {
    var str = '';
    for(var i=0;i<country.length;i++){
        str+='<li data-num=" '+i+' ">'+country[i].farmer+'</li>'
    }
    list.innerHTML = str;
}
updateList();


// console 点击的农场资料
function checkList(e){
    var num = e.target.dataset.num;
    // console.log(e.target.nodeName);
    if(e.target.nodeName !== "LI"){return}
    country.splice(num,1);
    updateList();
}
list.addEventListener('click',checkList,false);