var list = document.querySelector('.list li');

function checkList(e){
    var num = e.target.dataset.num;
    var dog = e.target.dataset.dog;
    console.log('农夫编号是'+num);
    console.log('有'+dog+'只狗');
}

list.addEventListener('click',checkList,false);
