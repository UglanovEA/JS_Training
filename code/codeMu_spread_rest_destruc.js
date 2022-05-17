'use strict';
// ======================================================================155

// let arr = [1, 2, 3, 4, 5];
// function func(num1, num2, num3, num4, num5) {
//   return num1 + num2 + num3 + num4 + num5;
// }
// console.log(func(...arr));

// let arr = [1, 2, 3, 4, 5];
// let max = Math.max(...arr);
// console.log(max);

// ======================================================================156

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr2);

// ======================================================================157

// let str = 'abcde';
// let arr = [...str];
// console.log(arr);

// let arr = ['a', ...'12345'];
// console.log(arr);

// ======================================================================158

// let result = unite([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);

// function unite(...arrs) {
//   return [].concat(...arrs);
// }

// ======================================================================161

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let [name, surname, department, position, salary] = arr;
// console.log(...arr);

// function func() {
//   return ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// }
// let [name, surname, department, position, salary] = func();
// console.log(name);

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let [, , department, position] = arr;
// console.log(department, position);

// let arr = ['Иван', 'Иванов', 'отдел разработки', 'программист', 2000];
// let [name, surname, ...rest] = arr;
// let info = arr.slice(2);
// console.log(info);

// let arr = ['Иван', 'Иванов', 'отдел разработки'];
// let [name, surname, department] = arr;
// let position;
// if (arr[3] !== undefined) {
//   position = arr[3];
// } else {
//   position = 'джуниор';
// }
// console.log(position);

// let arr = [2022, 05, 22];
// function func() {
//   return new Date().getDate();
// }
// let [year, month, day = func()] = arr;
// console.log(day);

// ======================================================================162

// let options = {
//   color: 'red',
//   width: 400,
//   height: 500,
// };
// let { color, width, height } = options;
// console.log(color, width, height);

// ======================================================================163

// function func([name, surname, department, position, salary]) {
//   console.log(name, surname, department, position, salary);
// }
// func(['Иван', 'Иванов', 'отдел разработки', 'программист', 2000]);
