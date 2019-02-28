// exports.xxx = value, 这种方式可以一直暴露，不会覆盖
exports.foo = function () {
    console.log('foo() module3');
};
exports.bar = function () {
    console.log('bar() module3');
};