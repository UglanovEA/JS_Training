// let billion = 1e9;
// console.log(billion) // 1000000000

// let ms = 1e-6;
// console.log(ms) //0.000001

/*=======================================================*/

// let num = 100;
// console.log(num.toString(16)) //ff
// console.log(num.toString(2)) //11111111

// console.log(123456..toString(36)) //2n9c
// console.log((123456).toString(36)) //2n9c

/*=======================================================*/

// let num = 3.1;
// console.log(Math.floor(num)) //3 Округление в меньшую сторону: 3.1 становится 3, а -1.1 — -2.
// console.log(Math.ceil(num)) //4 Округление в большую сторону: 3.1 становится 4, а -1.1 — -1.
// console.log(Math.round(num)) //3 Округление до ближайшего целого: 3.1 становится 3, 3.6 — 4, а -1.1 — -1.
// console.log(Math.trunc(num)) //3 Производит удаление дробной части без округления: 3.1 становится 3, а -1.1 — -1.

// let numTwo = 1.23456; //получить число 1,23
// console.log(Math.floor(numTwo * 100) / 100) //1.23 (123/100)
// console.log(numTwo.toFixed(2)) // '1.23' - string
// console.log(+numTwo.toFixed(2)) // 1.23 - number
// console.log(Number(numTwo.toFixed(2))) // 1.23 - number


// let sum = 0.1 + 0.2;
// console.log(+sum.toFixed(1)) //0.3 - number

// console.log((0.1 * 10 + 0.2 * 10) / 10) // 0.3
// console.log((0.28 * 100 + 0.14 * 100) / 100) // 0.4200000000000001

// console.log(9999999999999999999)

/*================Проверка: isFinite и isNaN============*/

// console.log(NaN === NaN) //false
// console.log(isNaN(NaN)) //true
// console.log(isNaN('str')) //true
// console.log(isNaN(1)) //false
// console.log(isNaN(-1)) //false
// console.log(isFinite("15")) //true
// console.log(isFinite("str")) //false
// console.log(isFinite(Infinity)) //false
// console.log(isFinite(Nan)) //Nan is not defined
// console.log(isFinite(null)) //true
// console.log(isFinite(-15)) //true

// Проверка содержится ли в строке число isFinite
// let num = console.log(+"")


/*================parseInt и parseFloat============*/

//Функция parseInt возвращает целое число, а parseFloat возвращает число с плавающей точкой

// console.log(parseInt("100px")) //100
// console.log(parseFloat("12.5px")) //12.5
// console.log(parseInt("12.5px")) // 12
// // console.log(parseFloat("12.5.6px")) //12.5
// console.log(parseFloat("px123")) //Nan на первом символе происходит остановка чтения
// console.log(parseInt("px123")) //Nan на первом символе происходит остановка чтения


//Второй аргумент parseInt(str, radix)
//Функция parseInt() имеет необязательный второй параметр. Он определяет систему счисления, таким образом parseInt может также читать строки с шестнадцатеричными числами, двоичными числами и т.д.:

// console.log(parseInt('0xff', 16)) //255
// console.log(parseInt('ff', 16)) //255 без 0x тоже работает
// console.log(parseInt('2n9c', 36)) //123456

//Возвращает псевдослучайное число в диапазоне от 0 (включительно) до 1 (но не включая 1)
// console.log(Math.random()) //0.4154561399395724
//Возвращает наибольшее/наименьшее число из перечисленных аргументов.
// console.log(Math.max(3, 5, 9, 1, -1)) //9
// console.log(Math.min(3, 5, 9, 1, -1)) //-1
//Возвращает число n, возведённое в степень power
// console.log(Math.pow(2, 10)) //1024


// console.log(6.35.toFixed(1)) //6.3
// console.log(6.35.toFixed(20)) //6.34999999999999964473
// console.log(1.35.toFixed(1)) //1.4
// console.log(1.35.toFixed(20)) //1.35000000000000008882