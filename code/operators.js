
/*=========================================================*/
/*
let return = 5;
let for = 'aa';
let let = false;
console.log(return + for + let); //SyntaxError: Unexpected token 'return'

let obj = {
  for: 1,
  let: 2,
  return: 3
}
console.log(obj.for + obj.let + obj.return) / 6
*/
/*=========================================================*/
/*
console.log(null || 2 && 3 || 4); //3
// Приоритет && выше, чем ||, поэтому он выполнится первым.
// Результат 2 && 3 = 3, поэтому выражение приобретает вид:
// null || 3 || 4
// Теперь результатом является первое истинное значение: 3
*/
/*=========================================================*/
/*
let a = [];
let b = 1;
let c = false;
let d = [];
console.log(`${typeof (b == c)}`, `${(a == d)}`) //boolean false - так как 1 не может равняться false - (a[] == d[]) --> false
*/
/*
console.log('' + 1 + 0) //'10'
console.log('' - 1 + 0) //-1
console.log(true + false) //1
console.log(6 / '3') //2
console.log('2' * '3') //6
console.log(4 + 5 + 'px') //'9px'
console.log('$' + 4 + 5) //'$45'
console.log('4' - 2) //2
console.log('4px' - 2) //NaN
console.log(7 / 0) //infinity
console.log('  -9  ' + 5) //'-9 5'
console.log('  -9  ' - 5) //-14
console.log(null + 1) //1
console.log(undefined + 1) //NaN
*/
