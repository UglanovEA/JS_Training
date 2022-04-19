'use strict';
// ======================================================================116
// let result = [];
// let arr = [1524, 1321, 4563, 7144, 2879];
// for (let elem of arr) {
//   if (checkDigitsPairsSum(elem)) {
//     // используем нашу функцию
//     result.push(elem);
//   }
// }
// function checkDigitsPairsSum(num) {
//   let str = String(num);
//   let sum1 = Number(str[0]) + Number(str[1]);
//   let sum2 = Number(str[2]) + Number(str[3]);
//   if (sum1 == sum2) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(result);

// for (let i = 0; i <= 100; i++) {
//   if (isPrime(i)) {
//     console.log(i);
//   }
// }
// function isPrime(num) {
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       return false;
//     }
//   }
//   return true;
// }

// for (let i = 1; i < 2030; i++) {
//   if (getDigitsSum(i) == 13) {
//     console.log(i);
//   }
// }
// function getDigitsSum(num) {
//   let sum = 0;
//   let digits = String(num).split('');
//   for (let digit of digits) {
//     sum += Number(digit);
//   }
//   return sum;
// }

// let arr = [123, 456, 789];
// let result = [];
// for (let num of arr) {
//   result.push(Number(reverse(num)));
// }
// function reverse(num) {
//   return String(num).split('').reverse().join('');
// }
// console.log(result); // выведет [321, 654, 987]

// let num1 = 234;
// let num2 = 535;
// let sum = 0;
// if (getDigitsSum(num1, sum) == getDigitsSum(num2, sum)) {
//   console.log('суммы цифр совпадают');
// } else {
//   console.log('суммы цифр не совпадают');
// }
// function getDigitsSum(num, num2) {
//   let digitsSum = num2;
//   let digits = String(num).split('');
//   for (let digit of digits) {
//     digitsSum += Number(digit);
//   }
//   return digitsSum;
// }

// let nums = [12, 24, 35, 14];
// for (let num of nums) {
//   console.log(num + ': ' + getDivisors(num).join(', '));
// }
// function getDivisors(num) {
//   let result = [];
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// ======================================================================117

// function getSum(arr) {
//   let sum = 0;
//   for (let elem of arr) {
//     sum += Number(elem);
//   }
//   return sum;
// }
// function getDigits(num) {
//   return String(num).split('');
// }
// console.log(getSum(getDigits(12345)));

// console.log(getAvg(getDivisors(24)));
// function getAvg(arr) {
//   let sum = 0;

//   for (let elem of arr) {
//     sum += elem;
//   }

//   return sum / arr.length;
// }
// function getDivisors(num) {
//   let result = [];
//   for (let i = 2; i < num; i++) {
//     if (num % i == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }

// ======================================================================118

// let arr = [12, 254, 36];
// let result = [];

// function getDigits(num) {
//   return String(num).split('');
// }
// function getSum(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     sum += Number(item);
//   }
//   return sum;
// }
// function inRange(num) {
//   let sum = getSum(getDigits(num));
//   return sum >= 1 && sum <= 9;
// }
// for (let elem of arr) {
//   if (inRange(elem)) {
//     result.push(elem);
//   }
// }
// console.log(result);

// ======================================================================119

// function isFreindly(num1) {
//   let sum1 = getSum(getOwnDivisors(num1));
//   let sum2 = getSum(getOwnDivisors(sum1));
//   if (sum2 == num1 && num1 != sum1) {
//     return true;
//   } else {
//     return false;
//   }
// }
// function getOwnDivisors(num) {
//   let result = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// function getSum(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     sum += Number(item);
//   }
//   return sum;
// }
// let min = 1;
// let max = 3000;
// function getFreindly(min, max) {
//   let arr = [];

//   for (let i = min; i < max; i++) {
//     if (isFreindly(i)) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }
// console.log(getFreindly(min, max));

// let min = 1;
// let max = 1000;
// function getPerfect(min, max) {
//   let arr = [];
//   for (let i = min; i < max; i++) {
//     if (getSum(getOwnDivisors(i)) == i) {
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// function getOwnDivisors(num) {
//   let result = [];
//   for (let i = 1; i < num; i++) {
//     if (num % i == 0) {
//       result.push(i);
//     }
//   }
//   return result;
// }
// function getSum(arr) {
//   let sum = 0;
//   for (let item of arr) {
//     sum += Number(item);
//   }
//   return sum;
// }
// console.log(getPerfect(min, max));

// ======================================================================120
