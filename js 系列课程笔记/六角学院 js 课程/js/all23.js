var list = document.querySelector('.list');
var area = document.getElementById('areaId');
var country = [
    {
        farmer: '查理',
        place: '雨花区'
    },
    {
        farmer: '汤姆',
        place: '雨花区'
    },
    {
        farmer: '约翰',
        place: '字画区'
    }
];
var obj=country.find(function (obj) {
    return obj.farmer === '查理';
});
console.log(obj);

function  updateList(e){
    var select = e.target.value;
    var str = '';
    for(var i=0;i<country.length;i++){
        if(select == country[i].place){
            str += '<li>'+country[i].farmer+'</li>'
        }
    }
    list.innerHTML = str;
}
area.addEventListener('change',updateList,false);
