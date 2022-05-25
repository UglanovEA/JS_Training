// const dictionary = new Map();
// dictionary.set('stringKey', 'Hello World');
// dictionary.set(null, 'Hello null');
// dictionary.set(undefined, 'Hello undefined');
// for (let item of dictionary) {
//   for (let item2 of item) {
//     console.log(item2);
//   }
// }
/*

Коллекция Map

Map - реализация простого ассоциативного массива (словаря). Он содержит данные в виде набора пар ключ/значение (ключи уникальны) и предоставляет методы для доступа и манипулирования этими данными.

Также как и объект, словарь позволяет:
— получать значение по ключу, а также проверять наличие ключа
— добавлять/удалять пары ключ/значение
— перезаписывать значение по ключу (ключи уникальны).
— итерироваться по ключам

Преимущества над объектами:
— Ключи словаря могут быть любого типа (а не только строки).
— Словарь хранит свой размер (не надо вычислять).
— Натуральный порядок обхода элементов ( в порядке добавления) с помощью for...of.
— Словарь не подмешивает ключи из прототипа (в отличие от объекта).

*/

/*===========================================================*/

/*
Промисы

Promise - это объект, представляющий результат успешного или неудачного завершения асинхронной операции. Так как большинство людей пользуются уже созданными промисами, это руководство начнём с объяснения использования вернувшихся промисов до объяснения принципов создания.

В сущности, промис - это возвращаемый объект, в который вы записываете два колбэка вместо того, чтобы передать их функции.

Например, вместо старомодной функции, которая принимает два колбэка и вызывает один из них в зависимости от успешного или неудачного завершения операции (см. рисунок выше).
*/

/*===========================================================*/

/*
BigInt

BigInt - это встроенный объект, который предоставляет способ представлять целые числа больше 2^53 - 1, наибольшего числа, которое JavaScript может надёжно представить с Number примитивом. Это максимальное значение можно получить, обратившись к Number.MAX_SAFE_INTEGER.

В некотором смысле он похож на Number, но отличается в некоторых ключевых моментах — его нельзя использовать с методами во встроенном объекте Math и нельзя смешивать в операциях с любыми экземплярами Number.
*/

/*===========================================================*/

// let animal = {
//   eats: true,
// };
// function rabbit(name) {
//   this.name;
// }
// rabbit.prototype = animal;
// let rab = new rabbit('white rabbit');
// console.log(rab.eats);
/*
F.prototype

Как мы помним, новые объекты могут быть созданы с помощью функции-конструктора new F().
Если в F.prototype содержится объект, оператор new устанавливает его в качестве [[Prototype]] для нового объекта.

JavaScript использовал прототипное наследование с момента своего появления. Это одна из основных особенностей языка.
Но раньше, в старые времена, прямого доступа к прототипу объекта не было. Надёжно работало только свойство "prototype" функции-конструктора, описанное в этой главе. Поэтому оно используется во многих скриптах.

Обратите внимание, что F.prototype означает обычное свойство с именем "prototype" для F. Это ещё не «прототип объекта», а обычное свойство F с таким именем.
*/

/*===========================================================*/

/*
Обработка ошибок, "try..catch"

Конструкция try..catch состоит из двух основных блоков: try, и затем catch.

Работает она так:
- Сначала выполняется код внутри блока try {...}.
- Если в нём нет ошибок, то блок catch(err) игнорируется: выполнение доходит до конца try и потом далее, полностью пропуская catch.
- Если же в нём возникает ошибка, то выполнение try прерывается, и поток управления переходит в начало catch(err). Переменная err (можно использовать любое имя) содержит объект ошибки с подробной информацией о произошедшем.
*/

/*===========================================================*/

/*
Часто бывает необходимо определить тип данных с которым ты работаешь и для этого есть оператор typeof.

Он возвращает строку, указывающую тип операнда.

Всего существует 8 возвращаемых значений:
- "undefined" - тип undefined
- "bigint" - тип bigint
- "boolean" - тип boolean
- "number" - тип number
- "string" - тип string
- "symbol" - тип symbol
- "function" - тип функция
- "object" - любой другой тип
*/

/*===========================================================*/

// console.log(JSON.parse('{}'));
// console.log(JSON.parse('true'));
// console.log(JSON.parse('"foo"'));

// let student = {
//   name: 'John',
//   age: 30,
//   isAdmin: false,
// };
// let json = JSON.stringify(student);
// console.log(json);

/*
JSON

Это текстовый формат представления данных в нотации объекта JavaScript.
Предназначен JSON, также как и некоторые другие форматы такие как XML и YAML, для обмена данными.

В JavaScript JSON очень часто применяется в качестве формата для передачи информации от веб-сервера клиенту (веб-браузеру) при AJAX запросе.

Основные методы:
 - JSON.parse()
Разбирает строку JSON, возможно с преобразованием получаемого значения и его свойств и возвращает разобранное значение.
 - JSON.stringify()
Возвращает строку JSON, соответствующую указанному значению, возможно с включением только определённых свойств или с заменой значений свойств определяемым пользователем способом.
*/

/*===========================================================*/

/*
Примитивные и ссылочные типы данных

Особенность примитивных типов данных заключается в том, что они неизменяемы (иммутабельны) и передаются по значению.
В отличие от объектов, которые передаются по ссылке.
При этом важно понимать, что объект или примитив, это не сама переменная, а соответствующий указатель на объект или само значение примитивного типа, которое этой переменной присвоено.

На картинке выше, при присваивание строчной переменной происходит создание новой переменной с таким же значением.
В результате мы имеем две независимые переменные, каждая из которых хранит строку "Привет!".

А при копирование объекта, у нас создается копия ссылки, сам же объект не дублируется.
*/

/*===========================================================*/

// let arr = ['apple', 'banana', 'orange'];
// // arr.push('orange');
// // arr.pop();
// // arr.shift();
// arr.unshift('melon');
// // console.log(arr.indexOf('banana'));
// // arr.splice(1, 1);
// let arr2 = arr.slice();
// console.log(arr);
// console.log(arr2);
/*
Методы массивов

Массивы предоставляют множество методов для работы с ними.

Добавление элемента в конец массива - push('item')
Удаление последнего элемента массива - pop()
Удаление первого элемента массива - shift()
Добавление элемента в начало массива - unshift('item')
Поиск номера элемента в массиве - indexOf('item')
Удаление элемента с определённым индексом - splice(pos, 1)
Создание копии массива - slice()
*/

/*===========================================================*/

/*
Каррирование

Каррирование – продвинутая техника для работы с функциями.
Каррирование – это трансформация функций таким образом, чтобы они принимали аргументы не как f(a, b, c), а как f(a)(b)(c).

Каррирование не вызывает функцию. Оно просто трансформирует её.

Если посмотреть на картинку выше можете увидеть, что каррирование это обёртка над функцией. Другими словами, curry(f) для функции f(a, b) трансформирует её в f(a)(b).
*/

/*===========================================================*/

/*
Создание объектов через "new"

Обычный синтаксис {...} позволяет создать только один объект.
Но зачастую нам нужно создать множество однотипных объектов.
Это можно сделать при помощи функции-конструктора и оператора "new".

Функции-конструкторы являются обычными функциями. Но есть два соглашения:
- Имя функции-конструктора должно начинаться с большой буквы.
- Функция-конструктор должна вызываться при помощи оператора "new".

Когда функция вызывается как new User(...), происходит следующее:
- Создаётся новый пустой объект, и он присваивается this.
- Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
- Возвращается значение this.
*/

/*===========================================================*/

// function User(name) {
//   this.name = name;
//   this.isAdmin = false;
// }
// let user = new User('Vacy');
// console.log(user.name);
// console.log(user.isAdmin);
// let admin = new User('volody');
// console.log(admin.name);

/*
Создание объектов через "new"

Обычный синтаксис {...} позволяет создать только один объект.
Но зачастую нам нужно создать множество однотипных объектов.
Это можно сделать при помощи функции-конструктора и оператора "new".

Функции-конструкторы являются обычными функциями. Но есть два соглашения:
- Имя функции-конструктора должно начинаться с большой буквы.
- Функция-конструктор должна вызываться при помощи оператора "new".

Когда функция вызывается как new User(...), происходит следующее:
- Создаётся новый пустой объект, и он присваивается this.
- Выполняется код функции. Обычно он модифицирует this, добавляет туда новые свойства.
- Возвращается значение this.
*/

/*===========================================================*/

// let user;
// let user2 = 'ivan';
// console.log(user ?? 'anon'); //anon
// console.log(user2 ?? 'anon'); //ivan
/*
Оператор объединения с null '??'

Оператор объединения с null представляет собой два вопросительных знака ??.

Результат выражения a ?? b будет следующим:

 - a, если значение a определено,
 - b, если значение a не определено.

То есть оператор ?? возвращает первый аргумент, если он не null/undefined, иначе второй.

Как правило, оператор ?? нужен для того, чтобы задать значение по умолчанию для потенциально неопределённой переменной.

Важно!!! Эта возможность была добавлена в язык недавно. В старых браузерах может понадобиться полифил.
*/

/*===========================================================*/

// function func() {
//   this.name = 'ivan';
//   return { name: 'war' };
// }
// console.log(new func().name);
/*
Возврат значения из конструктора return

Обычно конструкторы ничего не возвращают явно.
Их задача – записать все необходимое в this, который в итоге станет результатом.

Но если return всё же есть, то применяется простое правило:

При вызове return с объектом, будет возвращён объект, а не this.
При вызове return с примитивным значением, примитивное значение будет отброшено.
Другими словами, return с объектом возвращает объект, в любом другом случае конструктор вернёт this.

На картинке выше return возвращает объект вместо this.
*/

/*===========================================================*/

/*
Логические операторы

В JavaScript есть три логических оператора.

Несмотря на своё название, данные операторы могут применяться к значениям любых типов. Полученные результаты также могут иметь различный тип.

Давайте рассмотрим их:

 - || (ИЛИ)
Оператор логического ИЛИ возвращает истину когда хотя бы один из операндов является истинным.

 - && (И)
Оператор логического И возвращает истину если все операнды являются истинной.

 - ! (НЕ)
Оператор принимает один аргумент и выполняет следующие действия:
1)Сначала приводит аргумент к логическому типу true/false.
2)Затем возвращает противоположное значение.

Приоритет НЕ ! является наивысшим из всех логических операторов, поэтому он всегда выполняется первым, перед && или ||.

*/

/*===========================================================*/

/*
Set

Объект Set – это особый вид коллекции: «множество» значений (без ключей), где каждое значение может появляться только один раз.

Его основные методы это:

 - new Set(iterable) – создаёт Set, и если в качестве аргумента был предоставлен итерируемый объект (обычно это массив), то копирует его значения в новый Set.
 - set.add(value) – добавляет значение (если оно уже есть, то ничего не делает), возвращает тот же объект set.
 - set.delete(value) – удаляет значение, возвращает true, если value было в множестве на момент вызова, иначе false.
 - set.has(value) – возвращает true, если значение присутствует в множестве, иначе false.
 - set.clear() – удаляет все имеющиеся значения.
 - set.size – возвращает количество элементов в множестве.

Основная «изюминка» – это то, что при повторных вызовах set.add() с одним и тем же значением ничего не происходит, за счёт этого как раз и получается, что каждое значение появляется один раз.
*/
