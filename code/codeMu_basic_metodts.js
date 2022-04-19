'use strict';
// ======================================================================104

// console.log(Math.pow(2, 10));
// console.log(Math.sqrt(245));

// let arr = [4, 2, 5, 19, 13, 0, 10];
// let sum = 0;
// for (let item of arr) {
//   sum += item ** 3;
// }
// console.log(Math.sqrt(sum));

// let num = 379;
// num = Math.sqrt(num);
// console.log(Math.round(num));
// console.log(Math.ceil(num));
// console.log(Math.floor(num));
// console.log(num.toFixed(1));
// console.log(num.toPrecision(5));

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.max.apply(null, [4, -2, 5, 19, -130, 0, 10]));

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(1, 100));

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//   let RandomNum = function getRandomInt(min, max) {
//     return Math.floor(Math.random() * (max - min + 1)) + min;
//   };
//   arr[i - 1] = RandomNum(1, 100);
// }
// console.log(arr);

// let a = 3;
// let b = -5;
// console.log(Math.abs(a));
// console.log(Math.abs(b));

// ======================================================================105

// let str = 'я учу javascript!';
// console.log(str.substr(2, 3));
// console.log(str.substr(6, 10));
// console.log(str.slice(2, 5));
// console.log(str.slice(6, 16));
// console.log(str.substring(2, 5));
// console.log(str.substring(6, 16));

// let str = 'abcde';
// console.log(str.indexOf('c'));
// console.log(str.indexOf('o'));
// console.log(str.indexOf('a', 0));
// console.log(str.indexOf('e', str.length - 1));

// let str = 'http://google.comhttp://';
// console.log(str.indexOf('http://'));
// console.log(str.lastIndexOf('http://'));

// let str = 'http://google.comhttp://';
// console.log(str.startsWith('http://'));
// console.log(str.endsWith('http://'));

// let str = '1-2-3-4-5';
// console.log(str.split('-'));

// let str = '12345';
// console.log(str.split(''));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.join('-'));

// ======================================================================106

// let arr = [1, 2, 3, 4, 5];
// arr.push(4, 5, 6);
// console.log(arr);

// let arr = [1, 2, 3];
// arr.unshift(4, 5, 6);
// console.log(arr);

// let arr = [1, 2, 3];
// arr.shift();
// console.log(arr);

// let arr = [1, 2, 3];
// arr.pop();
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(3);
// console.log(sub);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(0, 3);
// console.log(sub);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.splice(0, 3, 1);
// console.log(sub);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.splice(3, 0, 'a', 'b', 'c');
// console.log(sub);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.splice(1, 4, 'a', 'b', 2, 3, 4, 'c', 5, 'e');
// console.log(sub);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.includes(7));

// ======================================================================107

// let str = 'london';
// let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// console.log(result); // выведет 'London'

// let str = 'london';
// let result = str.slice(0, -1) + str.slice(-1).toUpperCase();
// console.log(result);

// let str = 'london';
// let result = str.slice(0, 2).toUpperCase() + str.slice(1);
// console.log(result);

// let str = 'London';
// let result = str.slice(0, 1).toLowerCase() + str.slice(1);
// console.log(result);

// let str = 'word1 word2 word3';
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let results = words.join(' ');
// console.log(results);

// let str = 'var_test_text';
// let words = str.split('_');
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let results = words.join('');
// console.log(results);

// let str = 'var_test_text';
// let words = str.split('_');
// for (let i = 0; i < words.length; i++) {
//   words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// }
// let results = words.join(' ');
// let words2 = results.split(' ');
// for (let i = 0; i < words2.length; i++) {
//   words2[i] = words2[i].slice(0, 1).toLowerCase() + words2[i].slice(1);
// }
// let results2 = words2.join('');
// console.log(results2);

// let str = 'word1 word2 word3';
// let result = str.split(' ').reverse().join(' ');
// console.log(result);

// ======================================================================108

// let num = 12345;
// let str = String(num);
// let arr = str.split('');
// let sum = 0;
// for (let digit of arr) {
//   sum += Number(digit);
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
//   sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
//   sum += Number(digit);
// }
// console.log(sum); // почему-то выводит 5, а не 15

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
//   sum += Number(digit);
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let prod = 0;
// for (let digit of arr) {
//   prod += +digit;
// }
// console.log(prod);

// ======================================================================109
