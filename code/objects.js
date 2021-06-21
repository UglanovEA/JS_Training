/*
var obj1 = new Object(),
  obj2 = {},
  obj3 = Object.create(null);
*/
/*=========================================================*/
/*
let dataUser = {
  name: 'Robin'
};
function newUser(dataUser) {
  dataUser = { name: 'Kate' };
}
newUser(dataUser);
console.log(dataUser.name) // robin
*/
/*=========================================================*/
/*
// Какой вариант создания объекта не верный
var obj = new Object();
let obj = new Object{}; // ошибка syntaxerror: unexpected token
let obj = {};
let obj = new Object();
*/
/*=========================================================*/
/*
let obj = new Object();
console.log(obj.a); //undefined
obj.a = 5;
console.log(obj.a) //5
*/
/*=========================================================*/
/*
let user = {
  name: 'John',
  go: function () {
    console.log(this.name)
  }
}
  (user.go)() //Cannot access 'user' before initialization нет ; после обьекта
*/
/*=========================================================*/
/*
let obj = {
  name: 'John',
  surname: 'Smith'
}
obj.surname = 'Anderson'
delete obj.name
console.log(obj)
*/
/*=========================================================*/
/*
let obj = {
}
console.log(isEmpty(obj))
function isEmpty(obj) {
  for (key in obj) {
    return false;
  }
  return true
}
*/
/*=========================================================*/
/*
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(sum)
*/
/*=========================================================*/
/*function multyplyNumeric(obj) {
  for (let key in obj) {
    if (typeof obj[key] == 'number') {
      obj[key] *= 2;
    }
  }
}
*/