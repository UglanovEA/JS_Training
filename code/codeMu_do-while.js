'use strict';
// ======================================================================63

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i++;
// }

// let i = 11;
// while (i <= 33) {
//   console.log(i);
//   i++;
// }

// let i = 0;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

// let i = 1;
// while (i <= 100) {
//   console.log(i);
//   i += 2;
// }

// ======================================================================65

// for (let i = 1; i <= 100; i++) {
//   console.log(i);
// }

// for (let i = 11; i <= 33; i++) {
//   console.log(i);
// }

// for (let i = 0; i <= 100; i += 2) {
//   console.log(i);
// }

// for (let i = 1; i <= 100; i += 2) {
//   console.log(i);
// }

// for (let i = 100; i >= 1; i--) {
//   console.log(i);
// }

// ======================================================================66

// let result = 1;
// for (let i = 1; i <= 20; i++) {
//   result *= i;
//   console.log(result);
// }

// let result = 2;
// for (let i = 2; i <= 100; i += 2) {
//   result += i;
//   console.log(result);
// }

// ======================================================================67

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 == 1) {
//     console.log(arr[i]);
//   }
// }

// let result = 0;
// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   result = arr[i] ** arr[i];
//   console.log(result);
// }

// let arr = [2, 5, 9, 15, 1, 4];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > 3 && arr[i] < 10) {
//     console.log(arr[i]);
//   }
// }

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {
//   let str = String(arr[i]);
//   if (str[0] == '1' || str[0] == '2' || str[0] == '5') {
//     console.log(Number(str));
//   }
// }

// ======================================================================68

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let item of arr) {
//   console.log(item);
// }

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// for (let item of arr) {
//   sum += item;
// }
// console.log(sum);

// ======================================================================69

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let sum = 0;
// for (let item in obj) {
//   sum += obj[item];
// }
// console.log(sum);

// ======================================================================73

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
//   let result;
//   if (elem % 2 == 0) {
//     result = elem * elem;
//   } else if (elem % 3 == 0) {
//     result = elem * elem * elem;
//   } else {
//     continue; // перейдем на новую итерацию цикла
//   }
//   console.log(result); // выполнится, если делится на 2 или 3
// }

// ============================ФЛАГИ=================================75

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let flag = false;
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] == 'h') {
//     flag = true;
//     break;
//   }
// }
// if (flag == true) {
//   console.log('есть');
// } else {
//   console.log('нет');
// }

// ========================ПРОСТОЕ ЧИСЛО=============================76

// let num = 18;
// let flag = true;
// for (let i = 2; i < num; i++) {
//   if (num % i == 0) {
//     flag = false;
//     break;
//   }
// }
// console.log(flag);

// ======================================================================77

// let num = 9;
// while (num < 10000) {
//   num *= 3;
// }
// console.log(num);

// for (var num = 9, i = 0; num < 10000; num *= 3, i++);
// console.log(num, i);

// ======================================================================78

// let str = '';
// for (let i = 0; i < 5; i++) {
//   str += '0';
// }
// console.log(str);

// let str = '';
// for (let i = 1; i <= 9; i++) {
//   str += i;
// }
// console.log(str);

// let str = '';
// for (let i = 9; i >= 1; i--) {
//   str += i;
// }
// console.log(str);

// let str = '';
// for (let i = 1; i <= 9; i++) {
//   str = str + '-' + i;
// }
// console.log(str);

// ======================================================================79

// for (let i = 10; i < 1000; i++) {
//   let str = String(i);
//   if (Number(str[0]) + Number(str[1]) == 5) {
//     console.log(str);
//   }
// }

// let result = '';
// for (let i = 1; i <= 30; i++) {
//   result += i;
// }
// console.log(result);

// ======================================================================80

// for (let i = 1; i <= 9; i++) {
//   for (let j = 1; j <= 3; j++) {
//     document.write(i);
//   }
// }

// let str = '';
// for (let i = 1; i <= 3; i++) {
//   for (let j = 1; j <= 3; j++) {
//     str += String(i) + String(j) + ' ';
//   }
// }
// document.write(str);

// ======================================================================82

// let arr = [];
// for (let i = 0; i <= 100; i++) {
//   arr[i] = i + 1;
// }
// console.log(arr);

// let arr = [];
// for (let i = 1, j = 0; i <= 100; i += 2, j++) {
//   arr[j] = i;
// }
// console.log(arr);

// ======================================================================84

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// arr.push(4);
// arr.push(5);
// console.log(arr);

// let arr = [];
// for (let i = 0; i <= 10; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i <= 10; i++) {
//   arr.push('x');
// }
// console.log(arr);

// let arr = [1, 2, -3, 4, 5, -6, 7, -8, 9];
// let result = [];
// for (let item of arr) {
//   if (item > 0) {
//     result.push(item);
//   }
// }
// console.log(result);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// console.log(result);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let result = [];
// for (let elem of arr) {
//   if (elem % 2 != 0) {
//     result.push(elem);
//   }
// }
// console.log(result);

// ======================================================================85

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let result = {};
// for (let i = 0; i <= 6; i++) {
//   result[arr1[i]] = arr2[i];
// }
// console.log(result);

// let arr1 = ['пн', 'вт', 'ср', 'чт', 'пт', 'сб', 'вс'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let result = {};
// for (let i = 0; i <= 6; i++) {
//   result[arr2[i]] = arr1[i];
// }
// console.log(result);

// let obj = { a: 12, b: 21, c: 13, d: 23, e: 17 };
// let result = {};
// for (let key in obj) {
//   if (obj[key] > 10 && obj[key] < 20) {
//     result[key] = obj[key];
//   }
// }
// console.log(result);

// let obj = { 1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс' };
// let result = {};
// for (let key in obj) {
//   if (key % 2 == 1) {
//     result[key] = obj[key];
//   }
// }
// console.log(result);

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let result = {};
// for (let key in obj) {
//   result[obj[key]] = key;
// }
// console.log(result);

// ======================================================================86

// let obj = {
//   employee1: 100,
//   employee2: 200,
//   employee3: 300,
//   employee4: 400,
//   employee5: 500,
//   employee6: 600,
//   employee7: 700,
// };
// for (let key in obj) {
//   if (obj[key] <= 400) {
//     obj[key] += 0.1 * obj[key];
//   }
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let result = {};
// for (let i = 0; i < arr1.length; i++) {
//   result[arr1[i]] = arr2[i];
// }
// console.log(result);

// let obj = { 1: 6, 2: 7, 3: 8, 4: 9, 5: 10 };
// let result = 0;
// let sum = 0;
// let sum2 = 0;
// for (let key in obj) {
//   sum += Number(key);
//   sum2 += Number(obj[key]);
//   result = sum / sum2;
// }
// console.log(sum);
// console.log(sum2);
// console.log(result);

// let obj = { a: 1, b: 2, c: 3, d: 4, e: 5 };
// let arr1 = [];
// let arr2 = [];
// for (let key in obj) {
//   arr1.push(obj[key]);
//   arr2.push(key);
// }
// console.log(arr1);
// console.log(arr2);

// let obj = {
//   1: 125,
//   2: 225,
//   3: 128,
//   4: 356,
//   5: 145,
//   6: 281,
//   7: 452,
// };
// let arr = [];
// for (let key in obj) {
//   let str = String(obj[key]);
//   if (str[0] == '1' || str[0] == '2') {
//     arr.push(obj[key]);
//   }
// }
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[i + 1] = arr[i];
// }
// console.log(obj);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
//   obj[arr[i]] = i + 1;
// }
// console.log(obj);

// ======================================================================87

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// for (let item of arr) {
//   if (item == 3) {
//     counter++;
//   }
// }
// console.log(counter);

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// let counter2 = 0;
// for (let item of arr) {
//   if (item == 3) {
//     counter++;
//   }
//   if (item == 2) {
//     counter2++;
//   }
// }
// console.log(counter);
// console.log(counter2);

// let str = 'qwertqwwrrr';
// let obj = {};
// for (let i = 0; i < str.length; i++) {
//   if (obj[str[i]] === undefined) {
//     obj[str[i]] = 1;
//   } else {
//     obj[str[i]]++;
//   }
// }
// console.log(obj);

// ======================================================================88

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i + 1]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length - 1; i++) {
//   console.log(arr[i + 1] + arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i - 2]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i - 2] + arr[i]);
// }

// ======================================================================89

// let one = 0;
// let two = 1;
// for (let i = 0; i < 10; i++) {
//   let current = one + two;
//   one = two;
//   two = current;
//   console.log(current);
// }

// let one = 0;
// let two = 1;
// let three = 2;
// for (let i = 0; i < 20; i++) {
//   let current = one + two + three;
//   one = two;
//   two = three;
//   three = current;
//   console.log(current);
// }

// ======================================================================90

// let str = '';
// for (let i = 0; i < 5; i++) {
//   str += 'xx';
//   document.write(str + '</br>');
// }

// let str = '';
// for (let i = 1; i < 10; i += 2) {
//   for (let j = 0; j < i; j++) {
//     document.write(i);
//   }
//   document.write('<br>');
// }

// for (let i = 10; i > 1; i -= 2) {
//   let str = '';
//   for (let j = 0; j < i; j++) {
//     str += 'x';
//   }
//   document.write(str + '</br>');
// }

// for (let i = 9; i >= 1; i--) {
//   let str = '';
//   for (let j = 0; j < i; j++) {
//     str += i;
//   }
//   document.write(str + '<br>');
// }

// ======================================================================91

// let arr = [];
// let str = '';
// for (let i = 1; i <= 5; i++) {
//   str += 'xx';
//   arr.push(str);
// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   let str = '';
//   for (let j = 0; j < 5; j++) {
//     str += i;
//   }
//   arr.push(str);
// }
// console.log(arr);

// ======================================================================92

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let sum = 0;
// for (let item of arr) {
//   if (String(item)[0] == '1' || String(item)[0] == '2') {
//     sum += item;
//   }
// }
// console.log(sum);

// ======================================================================93

// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;

// for (let elem of arr) {
//   if (elem[0] > elem[1]) {
//     sum += Number(elem);
//   }
// }
// console.log(sum);

// let arr = ['21', '32', '34', '43', '45', '54', '55'];
// let sum = 0;
// for (let elem of arr) {
//   if (+elem[0] === +elem[1] + 1) {
//     sum += +elem; // исправляем
//   }
// }
// console.log(sum); // все работает

// let obj = { a: 10, b: 20, c: 30, d: 40, e: 50 };
// let sum = 0;
// for (let elem in obj) {
//   let str = String(obj[elem]);
//   if (str[0] === '1' || str[0] === '2') {
//     sum += +str;
//   }
// }
// console.log(sum);

// ======================================================================94

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
//   console.log(i);
// }

// let i = 0;
// while (i <= 10) {
//   console.log(i);
//   i++;
// }

// let res = 0;
// for (let i = 1; i <= 10; i++) {
//   res += i;
// }
// console.log(res);

// let res = 1;
// for (let i = 1; i <= 10; i++) {
//   res *= i;
// }
// console.log(res);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
//   sum += Number(elem);
// }
// console.log(sum); // должно вывести 15

// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i++) {
//   arr[i] = arr[i] ** 2;
// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 5; i++) {
//   arr.push(i);
// }
// console.log(arr);

// let obj = { a: 1, b: 2, c: 3 };
// let sum = 0;
// for (let elem in obj) {
//   sum += obj[elem];
// }
// console.log(sum);

// let obj = { a: 1, b: 2, c: 3 };
// let sum = 0;
// for (let key in obj) {
//   sum += obj[key];
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let res = '';
// for (let elem of arr) {
//   if (elem === 3) {
//     res = '+++';
//     break;
//   } else {
//     res = '---';
//   }
// }
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// let res = false;
// for (let elem of arr) {
//   if (elem === 3) {
//     res = true;
//     break;
//   }
// }
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//   if (elem % 2 == 0) {
//     console.log(elem);
//   }
// }

// ======================================================================95

// for (let i = 1; i <= 100; i++) {
//   document.write(i + '<br>');
// }

// for (let i = 100; i >= 1; i--) {
//   document.write(i + '<br>');
// }

// for (let i = 2; i <= 100; i += 2) {
//   document.write(i + '<br>');
// }

// let arr = [];
// for (let i = 0; i < 10; i++) {
//   arr[i] = 'x';
// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   arr[i - 1] = i;
// }
// console.log(arr);

// let arr = [1, -2, 3, -4, 5, 6, 7, 10, 9];
// for (let item of arr) {
//   if (item > 0 && item < 10) {
//     console.log(item);
//   }
// }

// let arr = [1, -2, 3, -4, 5, 6, 7, 10, 9, 5];
// let flag = false;
// for (let item of arr) {
//   if (item == 5) {
//     flag = true;
//     break;
//   }
// }
// console.log(flag);

// let arr = [1, 2, 3];
// let sum = 0;
// for (let item of arr) {
//   sum += item;
// }
// console.log(sum);

// let arr = [1, 2, 3];
// let sum = 0;
// for (let item of arr) {
//   sum += item ** item;
// }
// console.log(sum);

// ======================================================================96
