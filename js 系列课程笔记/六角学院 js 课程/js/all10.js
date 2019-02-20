var farms = [
    {
        farmer: '卡斯伯',
        field: 6,
        chick: 90,
        banana: 3315
    },
    {
        farmer: '查理',
        field: 10,
        chick: 189,
        banana: 33159
    },
    {
        farmer: '马力',
        field: 60,
        chick: 100,
        banana: 6696
    }];

var farmsTotal = farms.length;
// console.log(farmsTotal);

//将香蕉总数设置为0，然后用加总一点一点的往上加
var bananaTotal = 0;

// 在for循环里的 if 不加 else 也能执行！！！和单独使用 if 的时候不同
for(var i=0;i<farmsTotal;i++){

    // if 输出小鸡数量
    if(farms[i].chick>=100){
        console.log(farms[i].farmer+'的小鸡超过100只以上')
    }
    else{
        console.log(farms[i].farmer+'的小鸡只有不到100只')
    }

    //break
    if(farms[i].chick>=100){
        console.log(farms[i].farmer+'的小鸡比较多');
        farms[i].chick -= 100;
        console.log(farms[i].farmer+'卖掉100只之后剩下'+farms[i].chick+'只');
        break;       // 加上break之后循环只执行一次就停止
    }

    // 加总： 输出香蕉的总数
    bananaTotal += farms[i].banana;
}
console.log(farms[1].chick);
console.log('香蕉的总数是'+bananaTotal);