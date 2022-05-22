'use strict';

// var f = function () {
//   this.x = 5;
//   (function () {
//     this.x = 3;
//   })();
//   console.log(this.x); //3
// };
// f();

// let arr = ['1', '2', '3'].map(parseInt);
// console.log(arr);
/*
Array.prototype.map передает в функцию-коллбэк 3 аргумента: элемент массива, индекс элемента и сам массив. А у parseInt 2 аргумента: число или подобное ему и система счисления.
*/

// var var1 = 12;
// (function self() {
//   console.log('test' + var1);
//   var var2 = 500;
// })();
// console.log('var1' + var1);
// console.log('var1' + var2);

// console.log(!5 == !2);

// var a = [];
// console.log((a == !a) + ' ' + (a == a)); //'true true'

// for (let i = 0; i < 5; ++i) console.log(i);
// for (let i = 0; i < 5; i++) console.log(i); //разницы нет

//27 января 2020
