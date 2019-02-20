// var country =[
//     {
//         farmer: '卡斯伯',
//         dog: '123',
//         cat: '123'
//     },
//     {
//         farmer: '汤姆',
//         dog: '456',
//         cat: '456'
//     },
//     {
//         farmer: '约翰',
//         dog: '789',
//         cat: '789'
//     }
// ];
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
    var num = e.target.nodeName;
    console.log(e.target.nodeName);
    if(num !== "li"){return}
    var str = e.target.dataset.num;
    console.log('你选择的农夫是'+country[str].farmer);
    // console.log('这个农夫一共有'+country[str].dog+'只狗');
    // console.log('一共有'+country[str].cat+'只猫');
}
list.addEventListener('click',checkList,false);