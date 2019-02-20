var farms = [
    {
        farmer: '卡斯伯',
        field: 6
    },
    {
        farmer: '查理',
        field: 10
    }];

var farmsTotal = farms.length;
console.log(farmsTotal);

for(var i=0;i<farmsTotal;i++){
    console.log(farms[i].farmer);
    console.log('第'+(i+1)+'个农场主人是'+farms[i].farmer)
}