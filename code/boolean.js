/*=========================================================*/
// var a = Boolean(1) //true
// var a = Boolean(0) //false
// var a = Boolean(-1) //true

// var a = Boolean(' ') //true
// var a = Boolean("") //false

// var a = Boolean([]) //true
// var a = Boolean({}) //true

// var a = Boolean(true) //true
// var a = Boolean(false) //false

// var a = new Boolean(false) //false
// if (new Boolean(false)) alert('333') //true


// console.log(a)



/*
console.log(true + false + true) // 2 (1+0+1)
*/
/*=========================================================*/
/*
console.log(!5 == !2); //true - Любое положительное число в логическом контексте это true. !ЧИСЛО ПОЛОЖИТЕЛЬНОЕ в логическом контексте это false.false == false --> true
*/
/*=========================================================*/
/*
let a = new Boolean(false);
if (a) {
  console.log('true'); //true
} else {
  console.log('false')
}
//Эта строка создаёт объект, в логическом контексте объект всегда принимает true
*/
/*=========================================================*/
/*
console.log(false == undefined) // false
console.log(false == null) //false
console.log(null == undefined) //true
*/
/*=========================================================*/
/*
let a = [];
let b = 1;
let c = false;
let d = [];
console.log(`${typeof (b == c)}`, `${(a == d)}`) //boolean false
// Выражение:
// typeof (b == c) // boolean
// подставим значения в переменные:
// (1 == false) --> false, так как 1 не может равняться false.
// Далее мы получаем тип:
// typeof false --> boolean.
// Выражение:
// (a == d) // false
// подставим значения в переменные:
// (a[] == d[]) --> false
*/
/*
let a = 5;
if (a) {
  let a = 2;
  a *= a;
}
console.log(a) //5
var a = 5;
if (a) {
  var a = 2;
  a *= a;
}
console.log(a) //4
*/

