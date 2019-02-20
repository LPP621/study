// 指定 DOM
var list = document.querySelector('.list');
var sendData = document.getElementById('add');
var data = JSON.parse(localStorage.getItem('listData')) || [];  // 如果没有数据会产生一个空数组

//  监听与更新
sendData.addEventListener('click',addData);
list.addEventListener('click',toggleDone);
updateList(data);


// 加入列表，并同步更新网页与 localStorage
function addData(e){
    e.preventDefault();      // 阻止元素发生默认行为，比如表单提交
    var Txt = document.getElementById('txt').value;
    var todo = {
        content: Txt
    };
    data.push(todo);
    updateList(data);
    localStorage.setItem('listData',JSON.stringify(data));
}

// 更新网页内容
function updateList(items){
    str = '';
    for (var i=0;i<items.length;i++){
        str +='<li><span>' + items[i].content +'</span>' +'<span><a href="#" data-index='+i+'>删除</a></span></li>';
    }
    list.innerHTML = str;
}

// 删除待办事项
function toggleDone(e){
    e.preventDefault();
    if(e.target.nodeName !== 'A'){return};
    var index = e.target.dataset.index;
    data.splice(index,1);
    localStorage.setItem('listData',JSON.stringify(data));
    updateList(data);
}