/* namespace 模式：简单函数封装。。。 */

let obj = {
    msg: 'module2',
    foo(){
        console.log('foo()',this.msg);
    }
};