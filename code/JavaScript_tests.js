'use strict';
// console.log(0 || (1 && 2) || 3); //2

// setInterval(() => console.log('hi'), 1000);

// const func = () => arguments;
// console.log(func()); // ошибка

// const det = {
//   message: 'hello',
// };
// function getMess() {
//   return this.message;
// }
// console.log(getMess.call(det));

// function func() {
//   let a = (b = 33);
// }
// func();
// console.log(b);

// let a;
// a = parseInt(++a);
// console.log(parseInt(++a)); //Nan
// console.log(parseInt(--a)); //Nan

// var a = new Array(5).join('5');
// console.log(a); //'5555'

// if (function f() {}) {
//   alert(typeof f); // undefined
// }

// for (let i = 5; i < 10; i++) {
//   for (let j = i; j < i + 1; j++) {
//     alert(j);
//   }
// }

// fetch('https://www.website.com/api/user/1')
//   .then((res) => res.json())
//   .then((res) => console.log(res));

// let a = null + undefined;
// console.log(a); //NaN

// var a = 5;
// var test = 5 != a ? 'y' : 'n';
// console.log(test); //n

// const weakSet = new WeakSet();
// weakSet.add({});
// console.log(weakSet.has({})); //false
// const justSet = new Set();
// justSet.add({});
// console.log(justSet.has({})); //false

// [1, 2, 3, 4].reduce((x, y) => console.log(x, y)); //1 2, undefined 3, undefined 4

// function getIt(fruitList, ...args, favoriteFruit) {
// 	return [...fruitList, ...args, favoriteFruit]
// }
// getIt(['banana', 'apple'], 'pear', 'orange') //rest operator должен быть в конце

// const set = new Set();
// set.add(1);
// set.add('js tests');
// set.add({ name: 'js tests' });

// for (let item of set) {
//   console.log(item + 2);
// }

// var digitsArray = [1, 2, 3];
// Array.prototype.each = function () {};
// var result = '';
// for (var digit in digitsArray) {
//   result += digit;
// }
// console.log(result); //012each

// const { f: myName } = { f: 'johnny' };
// console.log(f); //error f is not defined

// console.log([] + 1 + 2); //'12'

// console.log('ToToWe'.slice(-2)); //We

// let a = new Array(1, 2);
// let b = new Array(3);
// console.log(a); //[1,2]
// console.log(b); //[пусто, пусто, пусто]
// console.log(a[0] + b[0]); //NaN

// let f = (a, b) => arguments.length;
// console.log(f(1, 2)); //error arguments is not defined

// console.log(Number(2) === Number(2)); //true
// console.log(Boolean(false) === Boolean(false)); //true
// console.log(Symbol('foo') === Symbol('foo')); //false

// class Person {
//   constructor() {
//     this.name = 'Johnny';
//   }
// }
// Person = class AnotherPerson {
//   constructor() {
//     this.name = 'Richard';
//   }
// };
// const member = new Person();
// console.log(member.name); //richard
