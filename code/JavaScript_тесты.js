// 'use strict';

// let flag = false;
// new Promise((res, rej) => {
//   let i = 0;

//   setInterval(function () {
//     if (flag) res(i);
//     if (i > 10) rej(i);
//     i++;
//   }, 1000);
// })
//   .then(alert)
//   .catch(alert); //11

// const fruits = {
//   apple: 10,
//   orange: 15,
//   banana: 7,
// };
// for (let [v, apple] of Object.entries(fruits)) {
//   console.log(fruits[apple]); // undefined undefined undefined
// }

// new Promise((res, rej) => {
//   let i = 0;
//   setInterval(() => {
//     if (i++) res(i);
//     else rej(i);
//   }, 500);
// })
//   .then((r) => console.log('then', r))
//   .catch((r) => console.log('catch', r));

// const arr = [1, true, '3', false];
// const result = arr.reduce((s, i) => {
//   return s + i;
// }, 0);
// console.log(result);'23false'

// let a = 1;
// const c = a++ + 1;
// console.log(c); //2

// let s = 'Hello';
// s[0] = 'W';
// console.log(s);

// let k;
// k = parseInt(`08`, 8) + parseInt(`05`, 8);
// console.log(k); //5

// function create() {
//   let count = 0;
//   return function () {
//     return count++;
//   };
// }
// const firstCount = create();
// const secondCount = create();
// for (let i = 0; i < 10; i++) {
//   firstCount();
//   secondCount();
// }
// console.log(firstCount(), secondCount()); // 10 10
