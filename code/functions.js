/*=======================Одна переменная========================*/
/*
var a = 15; //or let
function test() {
  console.log(a) // 15
}
test()
*/
/*=======================================================*/
/*
var a = 15; //or let
function test() {
  var a = 10;
}
test()
console.log(a) // 15
*/
/*=======================================================*/
/*
var a = 15; //or let
function test() {
  a = 10; //удалили обьявление
}
test()
console.log(a) // 10
*/
/*=======================================================*/
/*
var a = 15; //or let */
/*function test() {
  a = 10; //удалили обьявление, автоматом браузер выше делает обьявление
}
test()
console.log(a) // 10
*/
/*=======================================================*/
/*
var a = 15; //or let
function test(a) {
  a = 10;
}
test(a)
console.log(a) // 15
*/
/*=======================================================*/
/*
var a = 10;
function test() {
  var a = 5;
  return a
}
test() // не присваиваем поэтому 5 не используется
console.log(a) // 10
*/
/*=======================================================*/
/*
var a = 10;
function test() {
  a = 5;
  return a
}
test()
console.log(a) // 5
*/
/*=======================================================*/
/*
var a = 10;
function test(a) {
  a = 5;
  console.log(a) // 5
}
test(11)
console.log(a) // 10
*/
/*=======================================================*/
/*
function test(a) {
  a = 5;
  console.log(a) // 5
}
test()
console.log(a) // a is not defined
*/
/*=======================================================*/
/*
var a = 10;
function test() {
  var a = 5;
  testTwo()
  function testTwo() {
    console.log(a) // 5
  }
}
test()
*/
/*=======================================================*/
/*
var a = 10;
function test(a) {
  testTwo()
  function testTwo() {
    console.log(a) // 12
  }
}
test(12)
*/
/*=======================================================*/
/*
var a = 10;
function test() {
  console.log(a) // 10
}
test(12)
*/
/*=======================================================*/
/*
function test(e) {
  return true - e;
}
let b = test('4') + test('-4') + test('-4') + test('4')
console.log(b) //4
// Внутри функции есть знак '-', значит когда происходят вычисления он преобразует в число:
// true --> 1
// '4' --> 4
// '-4' --> -4
// А дальше обычные математические вычисления.
*/
/*=======================================================*/
/*
let a = 5;
a = (a++, a = test(a), a *= 2, a -= 5, a += 10);
function test(e) {
  return e + 5;
}
console.log(a) //27
// Сначала мы увеличиваем значение a до 6, затем мы вызываем функцию test(6) и присваиваем результат a новому значению, a становиться равным 11. После этого мы умножаем текущее значение a на 2, обновленное значение a будет 22. Затем мы отнимаем от a 5 и обновленное значение будет равно 17. И, наконец, мы увеличиваем значение a на 10, теперь значение a будет 27.
*/
/*=======================Две-три переменные=========================*/
/*
var a = 10;
function test() {
  var b = 14;
}
test();
console.log(b) // error b is not defined
*/
/*=========================================================*/
/*
var a = 15;
function test(b) {
  console.log(a) // 15
}
test()
*/
/*=========================================================*/
/*
var b = 20;
function test() {
  a = 10;
  var b = 15;
}
test()
console.log(a + b) // 30
*/
/*=========================================================*/
/*
b = 20;
var a = 10;
c = 30;
function test() {
  var a = 5;
  var b = 5;
  console.log(a + b + c) // 40
}
test()
console.log(a + b + c) // 60
*/
/*=========================================================*/
/*
b = 20;
var a = 10;
c = 30;
function test() {
  var a = 5;
  b = 5;
  console.log(a + b + c) // 40
}
test()
console.log(a + b + c) // 45
*/
/*=========================================================*/
/*
var b = 20;
var a = 10;
function test() {
  var a = 5;
  b = 5;
  c = 1;
  console.log(a + b + c) // 11
}
test()
console.log(a + b + c) // 16
*/
/*=========================================================*/
/*
function sum(a, b) {
  return a + b;
}
var result;
sum(2, 4);
console.log(result) //undefined
*/
/*=========================================================*/
/*
function sum(a, b) {
  return a + b;
}
sum(2, 4);
console.log(sum(2, 4)) // 6
*/
/*=========================================================*/
/*
function sum(a, b) {
  var a = 10;
  return a;
  var b = 100;
  return b
}
var result = sum();
console.log(result) // 10
*/
/*=========================================================*/
/*
function test(b) {
  return b + 12;
}
var a = test(12);
console.log(a) // 24
*/
/*=========================================================*/
/*
var c = 10;
function test(b) {
  var c = b + 12;
}
var a = test(12);
console.log(a) // undefined т.к нет ретурна
*/
/*=========================================================*/
/*
var c = 10;
function test(b) {
  var c = b + 12;
  return c;
}
var a = test(12);
console.log(a) // 24
*/
/*=========================================================*/
/*
var a = 12;
function test() {
  console.log(a) //12
  var b = 13;
}
test()
console.log(a) //12
console.log(b) // b is not defined
*/
/*
var a = function () {
  return
  {
    a: 1,
      b: 2,
        c: 3
  }
} //Uncaught SyntaxError: Unexpected token ':'
*/
/*=======================Замыкание=========================*/
/*
function sum(a) {
  return function sumTwo(b) {
    return a + b;
  }
}
var result = sum(10)(20)
console.log(result) //30
*/
/*=========================================================*/
/*
function sum(a) {
  function sumTwo(b) {
    return a + b;
  }
}
var result = sum(10)(20)
console.log(result) // sum(...) is not a function
*/
/*=========================================================*/
/*
function sum(a, b) {
  return function () {
    return 5
  }
}
var result = sum(2, 4);
console.log(result) // ƒ () {
                     // return 5
                     // }
*/
/*=========================================================*/
/*
function sum() {
  var a = 10;
  function sumTwo() {
  }
  return sumTwo
}
var result = sum();
console.log(result) //ƒ sumTwo() {
                     //}
*/
/*
let a = 20;
(function () {
  let b = 20;
  a = '11';
  (function () {
    let c = 2;
    console.log((a + b) / c); //560
  })();
})();
*/
/*=======================Замыкание this=========================*/
/*
var a = function () {
  this.x = 5;
  (function () {
    this.x = 3
  })();
  console.log(this.x) // 3
}
a();
*/
// function pushArr(arr, n) {
//   return arr.push(n); // [100, 400]
// }
// function popArr(arr) {
//   return arr.pop();
// }

// const w = [100];
// console.log(10 + pushArr(w, 400) + popArr(w));
