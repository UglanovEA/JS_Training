'use strict';
// ======================================================================96

// let arr = [
//   ['a', 'b', 'c'],
//   ['d', 'e', 'f'],
//   ['g', 'h', 'i'],
//   ['j', 'k', 'l'],
// ];
// console.log(arr[3][2], arr[1][1]);

// ======================================================================97

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let item of arr) {
//   for (let item2 of item) {
//     sum += item2;
//   }
// }
// console.log(sum);

// let arr = [[1, 2, 3], [4, 5], [6]];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     sum += arr[i][j];
//   }
// }
// console.log(sum);

// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// for (let item of arr) {
//   for (let item2 of item) {
//     for (let item3 of item2) {
//       sum += item3;
//     }
//   }
// }
// console.log(sum);

// let arr = [
//   [
//     [1, 2],
//     [3, 4],
//   ],
//   [
//     [5, 6],
//     [7, 8],
//   ],
// ];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr[i].length; j++) {
//     for (let k = 0; k < arr[i][j].length; k++) {
//       sum += arr[i][j][k];
//     }
//   }
// }
// console.log(sum);

// ======================================================================98

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 5; j++) {
//     arr[i][j] = j + 1;
//   }
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 4; j++) {
//     arr[i][j] = 'x';
//   }
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr[i][j] = [];
//     for (let k = 0; k < 5; k++) {
//       arr[i][j][k] = k + 1;
//     }
//   }
// }
// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr[i][j] = k++;
//   }
// }
// console.log(arr);

// let arr = [];
// let k = 2;
// for (let i = 0; i < 4; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 3; j++) {
//     arr[i][j] = k;
//     k += 2;
//   }
// }
// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i < 2; i++) {
//   arr[i] = [];
//   for (let j = 0; j < 2; j++) {
//     arr[i][j] = [];
//     for (let m = 0; m < 2; m++) {
//       arr[i][j][m] = k++;
//     }
//   }
// }
// console.log(arr);

// ======================================================================99

// let obj = {
//   1: {
//     1: 'a1',
//     2: 'a2',
//     3: 'a3',
//   },
//   2: {
//     1: 'b1',
//     2: 'b2',
//     3: 'b3',
//   },
//   3: {
//     1: 'c1',
//     2: 'c2',
//     3: 'c3',
//   },
// };
// console.log(obj[2][2], obj[3][1]);

// ======================================================================100

// let obj = {
//   1: {
//     1: 11,
//     2: 12,
//     3: 13,
//   },
//   2: {
//     1: 21,
//     2: 22,
//     3: 23,
//   },
//   3: {
//     1: 24,
//     2: 25,
//     3: 26,
//   },
// };
// let sum = 0;
// for (let key in obj) {
//   for (let key2 in obj[key]) {
//     sum += obj[key][key2];
//   }
// }
// console.log(sum);

// ======================================================================101
// let months = {
//   ru: [
//     'январь',
//     'февраль',
//     'март',
//     'апрель',
//     'май',
//     'июнь',
//     'июль',
//     'август',
//     'сентябрь',
//     'октябрь',
//     'ноябрь',
//     'декабрь',
//   ],
//   en: [
//     'january',
//     'february',
//     'march',
//     'april',
//     'may',
//     'june',
//     'july',
//     'august',
//     'september',
//     'october',
//     'november',
//     'december',
//   ],
// };
// let lang = 'ru'; // может быть или 'ru' или 'en'
// let month = 5; // число от 0 до 11
// console.log(months[lang][month]);

// ======================================================================102

// let employees = [
//   {
//     name: 'name1',
//     salary: 300,
//   },
//   {
//     name: 'name2',
//     salary: 400,
//   },
//   {
//     name: 'name3',
//     salary: 500,
//   },
// ];

// console.log(employees[0].salary + employees[1].salary);

// let students = {
//   boys: ['Коля', 'Вася', 'Петя'],
//   girls: ['Даша', 'Маша', 'Лена'],
// };
// console.log(students.boys['1'], students.girls['2']);

// ======================================================================103
