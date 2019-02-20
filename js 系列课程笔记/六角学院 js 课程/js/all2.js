// 定义
function greet(){
    var greetNote = "欢迎光临，请问您需要点什么?";
    document.getElementById('greetId').textContent = greetNote;
    console.log(greetNote);
}
// 执行
greet();

function order(hamNum,cokeNum) {
    var total = (hamNum * 50) + (cokeNum * 20);
    document.getElementById('totalId').textContent = total;
    console.log(total);
}
order(8,1);
order(80,10);
order(6,5);