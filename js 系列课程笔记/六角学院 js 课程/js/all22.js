

var el = document.querySelector('.link');
el.addEventListener('click',function(e){

    // 取消元素的默认行为
    e.preventDefault();
    console.log('test')
},false);