/*
let str = "hello"
str.test = 5;
console.log(str.test) //undefined примитивы не являются объектами. Они не могут хранить дополнительные данные
*/
/*=======================================================*/
// console.log('i\'m andrew') // спецсимвол
// console.log(`i\'m andrew`) // обратные ковычки
// console.log(`i\'m andrew \\`) // i'm andrew \ - чтобы вывести еще один слеш
/*=======================================================*/
// console.log(`are`.length) //3
// console.log(`ar\e`.length) //3

/*===================Доступ к символам===================*/
// let str = 'hello'
// console.log(str[1]) // e
// console.log(str.charAt(3)) // l
// console.log(str[str.length - 1]) // 0 получаем последний символ
/*=======================================================*/
// let str = 'hello'
// str[1] = 'a'
// console.log(str[1]) //e
/*=======================================================*/
// let str = 'hello'
// let strL = 'HELLO'
// console.log(str.toLocaleUpperCase()) //HELLO
// console.log(strL.toLocaleLowerCase()) //hello

/*====================Поиск подстроки====================*/
// let str = 'Hello my brother'
// console.log(str.lastIndexOf('my')) // 6 
// console.log(str.lastIndexOf('My')) // -1 совпадений нет, поиск чувствителен к регистру

// let str = 'Hello Piter! How are you Piter'
// let target = 'Piter'
// let pos = 0
// while (true) {
//   let foundPos = str.indexOf(target, pos)
//   if (foundPos == -1) break;
//   console.log(`найдено тут: ${foundPos}`)
//   pos = foundPos + 1 // продолжаем со следующей позиции
// }

// console.log(str.includes('Piter')) //true
// console.log(str.includes('piter')) //false

// console.log('Piter'.startsWith('Pi')) //true
// console.log('Piter'.startsWith('pi')) //false

/*====================Получение подстроки====================*/

// let str = 'Hello'
// // console.log(str.slice(0, 4)) //Hell
// // console.log(str.slice(4)) //o
// // console.log(str.slice(-2)) //lo
// // console.log(str.slice(-3, -1)) //ll
// // console.log(str.substring(1, 3)) //el
// // console.log(str.substring(3, 1)) //el
// // console.log(str.slice(1, 3)) //el
// // console.log(str.slice(3, 1)) //""
// console.log(str.substr(1, 3)) //ell

/*====================Сравнение строк====================*/
// console.log('a' > 'Z') //true
// console.log('a' > 'A') //true
// console.log('a' > 'Ab') //true
// console.log('a' > 'b') //false

// let str = '';
// for (let i = 65; i <= 220; i++) {
//   str += String.fromCodePoint(i);
// }
// console.log(str); //ABCDEFGHIJKLMNOPQRSTUVWXYZ[\]^_`abcdefghijklmnopqrstuvwxyz{|}~ ¡¢£¤¥¦§¨©ª«¬­®¯°±²³´µ¶·¸¹º»¼½¾¿ÀÁÂÃÄÅÆÇÈÉÊËÌÍÎÏÐÑÒÓÔÕÖ×ØÙÚÛÜ
