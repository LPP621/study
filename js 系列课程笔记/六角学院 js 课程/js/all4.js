
// 计算汉堡的总价
function getHamPrice(num){
    var hamPrice = 50;
    var total = hamPrice * num;
    return total;
}

var Tom = getHamPrice(30);
var John = getHamPrice(50);
console.log(Tom);
console.log(John);