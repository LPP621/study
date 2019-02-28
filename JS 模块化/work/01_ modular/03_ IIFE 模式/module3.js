/* IIFE 模式：匿名函数自调用（闭包）*/

(function (window) {   // 声明一个形参
   let msg = 'modules';
   function foo() {
       console.log('foo()', msg);
   }
   window.module3 = {
       foo: foo         // 给 window 定义一个对象module3,对象里面有一个方法叫做 foo
   }
})(window);     // 注入一个实参