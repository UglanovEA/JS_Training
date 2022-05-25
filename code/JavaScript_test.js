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

// let x = 5;
// x = (x++, (x = addFive(x)), (x *= 2), (x -= 5), (x += 10));
// function addFive(num) {
//   return num + 5;
// }
// console.log(x); // 6 => 11 => 22 => 17 => 27

// let bool = new Boolean(false);
// if (bool) {
//   console.log('true'); // будет true
// } else {
//   console.log('false');
// }

// console.log(false == undefined); // false
// console.log(false == null); // false
// console.log(null == undefined); //true

// let a = [],
//   b = 1,
//   c = false,
//   d = [];
// console.log(`${typeof (b == c)}, ${a == d}`); // boolean false

// let user = {
//   name: 'kate',
//   go: function () {
//     alert(this.name);
//   },
// };
// user.go();

// let a = 20;
// (function () {
//   let b = 20;
//   a = '11';
//   (function () {
//     let c = 2;
//     alert((a + b) / c); //560
//   })();
// })();

// const car = {
//   name: 'ford',
//   getName() {
//     return this.name;
//   },
// };
// console.log(car.getName());

// var e;
// e = 'a0ff' - 2;
// if (e != e) {
//   console.log(true); // NaN != NaN => true
// } else {
//   console.log(false);
// }

// console.log("Hello!' +"_"+ "World!');

// console.log(document.body.parentNode); // html
// console.log(document.documentElement); // html

// let arr = [1, 2, 3];
// function A() {
//   return arr;
// }
// function B() {
//   return arr;
// }
// var a = new A();
// var b = new B();
// console.log(a == b); // true

// console.log('' + 1 + 0); // '10'
// console.log('' - 1 + 0); // -1
// console.log(true + false); //1
// console.log(6 / '3'); //2
// console.log('2' * '3'); //6
// console.log(4 + 5 + 'px'); //'9px'
// console.log('S' + 4 + 5); //'S45'
// console.log('4' - 2); //2
// console.log('4px' - 2); //NaN
// console.log(7 / 0); //infinity
// console.log(' -9 ' + 5); // ' -9 5'
// console.log(' -9 ' - 5); //-14
// console.log(null + 1); //1
// console.log(undefined + 1); //NaN

// function a(value) {
//   return true - value;
// }
// var b = a('4') + a('-4') + a(-'4') + a(4);
// console.log(b); //4

// const numbers = [1, 2, 3, 4, 5, 6, 6, 7, 8, 8, 5];
// console.log([...new Set(numbers)]); //[1,2,3,4,5,6,7,8]

// myname = 'global';
// function func() {
//   console.log(myname);
//   var myname = 'local';
//   console.log(myname);
// }
// func();

// let value = window.wiper;
// console.log(value === null); //false
// console.log(value == null); //true
// console.log(value == undefined); //true
// console.log(value === undefined); //true

// var arr = [3, 4, 5];
// for (var i in arr) {
//   console.log(i); //0,1,2
// }

// var s = 'hello';
// s[0] = 'w';
// console.log(s);

// var obj = function () {
//   this.name = 'alex';
//   var that = {};
//   that.name = 'david';
//   var name = this.name + ' && ' + that.name;
//   return name;
// };
// var o = new obj();
// console.log(o.name); // 'alex

// var a = -1;
// var b = 0.25;
// console.log((a == ~b) ^ 0); // 1

// var a1 = 'wrong';
// function a() {
//   return '1sr';
// }
// function a(val) {
//   this.a1 = 'right';
//   return '2nd';
// }
// console.log(new a().a1); //right

// var a = new Array(5).join('5');
// console.log(a); //"5555"

// let a = '5';
// let b = 2;
// console.log(a++ + b); //7

// function bike() {
//   console.log(this.name);
// }
// var name = 'nin';
// var obj1 = { name: 'pom', bike: bike };
// var obj2 = { name: 'site', bike: bike };
// bike();
// obj1.bike();
// obj2.bike();

// document.write.call(document, 'hello');

// var obj = {
//   name: 'alex',
// };
// console.log(obj.hasOwnProperty('name'));

// console.log(typeof typeof null);

// console.log(parseInt(1 / 0, 19)); //18

// console.log(parseInt('08')); //8

// function func() {
//   var a = 1;
//   if (a == 1) {
//     var b = 2;
//   }
//   return b;
// }
// console.log(func()); //2

// console.log(a); //undefined
// var a = 'a';
// function func() {
//   console.log(a); //undefined
//   var a = 'a1';
//   console.log(a); //a1
// }
// func();

// var n = 3;
// var b = true;
// n = n.toString(2) + Number(b) + n.toString() - 3 + !Number(b);
// console.log(n); //1110

// var a = Array();
// a[a.length] = 0;
// console.log(a.length); //1

/* 19 октября */
