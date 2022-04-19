'use strict';
// ======================================================================109

// function showName() {
//   alert('Evgenyy');
// }
// showName();

// let sum = 0;
// function getSum() {
//   for (let i = 0; i <= 100; i++) {
//     sum += i;
//     console.log(sum);
//   }
// }
// getSum();

// ======================================================================110

// function getCUB(num) {
//   return num * num * num;
// }
// console.log(getCUB(2));

// function checkNum(num) {
//   if (num > 0) {
//     console.log('+++');
//   } else {
//     console.log('---');
//   }
// }
// checkNum(-2);

// let sum = 0;
// function getSum(num1, num2, num3) {
//   return (sum = num1 + num2 + num3);
// }
// console.log(getSum(1, 2, 3));

// function func(num = 5) {
//   alert(num * num);
// }
// console.log(func(2));
// console.log(func(3));
// console.log(func());

// function func(num1 = 0, num2 = 0) {
//   alert(num1 + num2);
// }
// console.log(func(2, 3));
// console.log(func(3));
// console.log(func());

// ======================================================================111

// function getCube(num) {
//   return num * 3;
// }
// let result = getCube(3);
// console.log(result);

// function sqrt(num) {
//   return Math.sqrt(num);
// }
// function round(num) {
//   return num.toFixed(3);
// }
// console.log(round(sqrt(2)));

// function sqrt(num) {
//   return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
//   return num1 + num2 + num3;
// }
// console.log(sum(sqrt(2), sqrt(3), sqrt(4)));

// function func(num) {
//   return num;
//   let result = num * num;
//   return result;
// }
// alert(func(3));

// function func(num) {
//   if (num <= 0) {
//     return Math.abs(num);
//   } else {
//     return num * num;
//   }
// }
// alert(func(10));
// alert(func(-5));

// function func(num) {
//   if (num <= 0) {
//     return Math.abs(num);
//   }
//   return num * num;
// }
// alert(func(10));
// alert(func(-5));

// function func(num) {
//   let sum = 0;
//   for (let i = 1; i <= num; i++) {
//     sum += i;
//     return sum;
//   }
// }
// alert(func(5));

// function func(num) {
//   let i = 1;
//   while (true) {
//     num /= 2;
//     if (num < 10) {
//       return i;
//     }
//     i++;
//   }
// }
// console.log(func(100));

// function func(num1, num2) {
//   if (num1 > 0 && num2 > 0) {
//     return num1 * num2;
//   } else {
//     return num1 - num2;
//   }
// }
// alert(func(3, 4));

// ======================================================================112

// let arr = [1, 2, 3, 4, 5];
// function getSumSQRT(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     sum += item * item;
//   }
//   return sum;
// }
// console.log(getSumSQRT(arr));

// function getDigitsSum(num) {
//   let sum = 0;
//   let str = String(num);
//   return (sum += Number(str[0]) + Number(str[1]));
// }
// console.log(getDigitsSum(22));

// function getDivisors(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     if (num % i == 0) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getDivisors(24));

// function reverseStr(str) {
//   return str.split('').reverse().join('');
// }
// console.log(reverseStr('war'));

// function delElem(i, arr) {
//   for (let item of arr) {
//     if (arr[item] == i) {
//       delete arr[item];
//     }
//   }
//   return arr;
// }
// console.log(delElem(2, [1, 2, 3, 4, 5, 2]));

// function func(num) {
//   let arr = [];
//   for (let i = 1; i <= num; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(func(5)); // выведет [1, 2, 3, 4, 5]

// function func(num1, num2) {
//   let arr = [];
//   for (let i = num1; i <= num2; i++) {
//     arr.push(i);
//   }
//   return arr;
// }
// console.log(func(3, 7)); // выведет [3, 4, 5, 6, 7]

// ======================================================================113
