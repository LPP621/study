document.getElementById('countId').onclick = function () {
    var hamPrice = 50;
    var cokePrice = 20;
    var hamNum = parseInt(document.getElementById('hamId').value)*hamPrice;
    var cokeNum = parseInt(document.getElementById('cokeId').value)*cokePrice;
    document.getElementById('totalId').textContent = hamNum +cokeNum;
    console.log(hamNum);
    console.log(cokeNum);

    // 如果直接相加的话会显示为字符串，所以要先用 parseInt 转为数值类型,不确定类型的话可以用 typeof() 检查类型
    console.log(hamNum+cokeNum);
}