


var farm = {
    farmer : '卡斯伯',
    chick: 15,
    duck: 3,
    dog: ['张木事','帮的'],
    goDinner: function(){
        console.log(farm.farmer+'该回家吃饭啦')
    },
    poultryTotal: function(){
        var num = farm.chick + farm.duck;
        console.log('我的农场里面共有'+ num + '只家禽')
    }
};
// 调用
farm.goDinner();
farm.poultryTotal();