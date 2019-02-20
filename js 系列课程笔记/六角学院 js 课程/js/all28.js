var Btn = document.querySelector('.btn');
var Btn1 = document.querySelector('.btn1');
function saveName(e){
    var str = document.querySelector('.txt').value;
    localStorage.setItem('myName',str);
}
Btn.addEventListener('click',saveName);
Btn1.addEventListener('click',function(){
    var str = localStorage.getItem('myName');
    alert('你的名字叫'+str);
});