// alert("Я JavaScript!")
// let name = "Джон";
// let admin = "Джон";
// alert(admin);
// let ourPlanetName = "Земля"
// let currentUserName = "Пользователь"
// let name = prompt("Привет, как тебя зовут");
// alert(`Меня зовут ${name}`);
// let isBoss = confirm("Ты здесь главный?");
// alert(isBoss);
// let yourName = prompt("Как тебя зовут?");
// alert(`Меня зовут ${yourName}`);

// let a = 1, b = 1;
// let c = ++a; // 2
// let d = b++; // 1

// let a = 2;
// let x = 1 + (a *= 2); // a=4 x =5

// "" + 1 + 0 // 10 сложение со строкой преобразует в строку
// "" - 1 + 0 // -1 вычитание превращает строку в ноль
// true + false // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" //9px
// "$" + 4 + 5 //$45
// "4" - 2 // 2
// "4px" - 2 //nan
// 7 / 0 //infinity
// "  -9  " + 5 //" -9 5"
// "  -9  " - 5 // -14
// null + 1 //1 null это ноль
// undefined + 1 //nan undefined становиться nan
// " \t \n" - 2  //-2

// let a = prompt("Первое число?", 1);
// let b = prompt("Второе число?", 2);

// alert(+a + +b); // 12

// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null //false
// null == "\n0\n" // false (null равен только undefined)
// null === +"\n0\n" // false (Строгое сравнение разных типов.)

// if ("0") {
//   alert('Привет');
// }

// let company = prompt("Какое 'официальное' название JavaScript?")
// if (company == "ECMAScript") {
//   alert("Правильно")
// } else {
//   alert("Не знаете? “ECMAScript”!")
// }

// let value = prompt("Введите число")
// if (value > 0) {
//   alert(1)
// } else if (value == 0) {
//   alert(0)
// } else if (value < 0) {
//   alert(-1)
// }

// let result = (a + b < 4) ? 'Мало' : 'Много';

// let message = (login == 'Сотрудник') ? 'Привет' :
//      (login == 'Директор') ? 'Здравствуйте' :
//      (login == '') ? 'Нет логина' : 
//      "";

// alert(null || 2 || undefined); //2
// alert(alert(1) || 2 || alert(3)); // 1 and 2
// alert(1 && null && 2); //null
// alert(alert(1) && alert(2)); // 1 and undefined
// alert(null || 2 && 3 || 4); //3 первое истинное значение

// let age = 50;
// if (age >= 14 && age <= 90) {
//   alert("Verno")
// }

// let age = 50;
// if (age < 14 || age > 90) {
//   alert("NeVerno")
// } else {
//   alert("Verno")
// }

// let age = 50;
// if (!(age >= 14 && age <= 90)) {
//   alert("Verno")
// }

// if (-1 || 0) alert('first'); // выполнится Результат -1 || 0 = -1, в логическом контексте true
// if (-1 && 0) alert('second'); //не выполнится -1 && 0 = 0,  в логическом контексте false
// if (null || -1 && 1) alert('third'); // выполниться вычисления: null || -1 && 1  ->  null || 1  ->  1

// let login = prompt("Введите логин");
// if (login == "Админ") {
//   let pass = prompt("Введите пароль")
//   if (pass == "Я Главный") {
//     alert("Здравствуйте!")
//   } else if (pass == "Отмена") {
//     alert("Отменено")
//   } else {
//     alert("я вас не знаю")
//   }
// } else if (login == "Отмена") {
//   alert("Отменено")
// } else {
//   alert("Я вас не знаю")
// }
