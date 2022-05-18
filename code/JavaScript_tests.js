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
