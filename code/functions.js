/*

var a = 15; //or let
function test() {
  console.log(a) // 15
}
test()

*/
/*==========================================================*/
/*

var a = 15; //or let
function test() {
  var a = 10;
}

test()

console.log(a) // 15

*/
/*=========================================================*/
/*
var a = 15; //or let
function test() {
  a = 10; //удалили обьявление
}

test()

console.log(a) // 10
*/

/*=========================================================*/
/*var a = 15; //or let */
/*function test() {
  a = 10; //удалили обьявление, автоматом браузер выше делает обьявление
}

test()

console.log(a) // 10
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
var a = 10;
function test() {
  var a = 5;
  return a
}

test() // не присваиваем поэтому 5 не используется

console.log(a) // 10
*/
/*=========================================================*/
/*
var a = 10;
function test() {
  a = 5;
  return a
}

test() //

console.log(a) // 5
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