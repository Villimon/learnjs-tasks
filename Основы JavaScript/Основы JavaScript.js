// 4.Переменные

// 1.Задание
/* 
let admin;
let name;

name = 'Джон'
admin = name
console.log(admin)
 */

// 2.Задание
let planet;
let currentUser;

// 3.Задание
// Использовать строчные имена для констант



// 5.Типы данных

//1.Задание
/*
let name = "Ilya";

console.log(`hello ${1}`); // hello 1
console.log(`hello ${"name"}`); // hello name
console.log(`hello ${name}`); // hello Ilya
*/


// 8.Базовые операторы, математика

// 1.Задание
// let a = 1, b = 1;

// let c = ++a; // 2
// let d = b++; // 1
// a,b = 2


// 2.Задание
// let a = 2;

// let x = 1 + (a *= 2);
// a=4,x = 5


// 3.Задание
// "" + 1 + 0 // '10'
// "" - 1 + 0 // -1
// true + false // true
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // '9px'
// "$" + 4 + 5 // '$45'
// "4" - 2 // 2
// "4px" - 2  // NaN
// "  -9  " + 5 // " -9 5"
// "  -9  " - 5 // -14
// null + 1 // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2


// 4.Задание
/*
let a = prompt("Первое число?", 1);
let b = prompt("Второе число?", 2);

alert(+a + +b); // 12
*/


// 9.Операторы сравнения
// 5 > 4 // true
// "ананас" > "яблоко" // false
// "2" > "12" // true
// undefined == null // true
// undefined === null // false
// null == "\n0\n" // false
// null === +"\n0\n" // false


// 10.Условное ветвление: if, '?'

// 1.Задача
/*
if ("0") {
    alert('Привет');
}
Ответ:выведется
 */

// 2.Задача
/*
let name = prompt('Какое «официальное» название JavaScript?', '')
if(name == 'ECMAScript') {
    alert('Верно')
} else {
    aletr('Не знаете? ECMAScript!')
}
 */
// 3.Задача
/*
let number = +prompt('Введите число', '')
if (number > 0) {
    alert(1)
} else if (number < 0) {
    aletr(-1)
} else {
    aletr(0)
} */


// 4.Задача

// let result;
// result = a + b < 4 ? result = 'Мало': result = 'Много'


// 5.Задача

/*
let message;

message = login = 'Сотрудник' ? message = 'Привет' :
    login == 'Директор' ? message = 'Здравствуйте' :
        login == '' ? message = 'Нет логина' : message = ''
*/


// 11.Логические операторы

// 1.Задача
// alert( null || 2 || undefined ); //2


// 2.Задача
// alert( alert(1) || 2 || alert(3) ); // 2


// 3.Задача
// alert( 1 && null && 2 ); // null


// 4.Задача
// alert( alert(1) && alert(2) ); // alert(1)


// 5.Задача
// alert( null || 2 && 3 || 4 ); //3


// 6.Задача
// if (age >= 14 && age <= 90)


// 7.Задача
// if (-1 || 0) alert( 'first' ); // -1 - выполнится
// if (-1 && 0) alert( 'second' ); // 0 - не выполнится
// if (null || -1 && 1) alert( 'third' ); // 1 - выполнится


// 8.Задача
/*
let user = prompt('Логин?', "")
if (user === 'Админ') {
    let password = prompt('Пароль', '')
    if (password === 'Я главный') {
        console.log('Здравствуйте');
    } else if (password === '' || password === null) {
        console.log('Отменено');
    } else {
        console.log('Неверный пароль');
    }

} else if (user === '' || user === null) {
    console.log('Отменено');
} else {
    console.log('Я вас не знаю');
} */


// 13.Циклы while и for

//1.Задача
// Ответ 1

//2.Задача
// let i = 0;
// while (++i < 5) alert( i );
// Выведет 1-4

// let i = 0;
// while (i++ < 5) alert( i );
// Выведет 1-5


//3.Задача
// for (let i = 0; i < 5; i++) alert( i ); // 0-1-2-3-4
// for (let i = 0; i < 5; ++i) alert( i ); // 0-1-2-3-4

//4.Задача
/*
for (let i = 1; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i)
    }

}
 */
//5.Задача
/* let i = 0;
while(i < 3) {
    alert( `number ${i}!` );
    i++
}
*/


//6.Задача
/*
let number = +prompt('Введите число', '')

while(number < 100 && number) {
      if(number > 100) break
}
 */
//7.Задача
/*
next: for (let i = 2; i < n; i++) {
    n = 10

    for (let j = 2; j < i; j++) {
        if (i % j == 0) continue next
    }
    console.log(i)
}
 */


// 14.Конструкция "switch"

// 1.Задача

/*
let browser

if (browser === 'Edge') {
    console.log("You've got the Edge!");
} else if (browser === 'Chrome' || browser === 'Firefox' || browser === 'Safari' || browser === 'Opera') {
    console.log('Okay we support these browsers too');
} else {
    console.log('We hope that this page looks ok!');
}

 */
// 2.Задача

/*
const number = +prompt('Введите число между 0 и 3', '');


switch (number) {
    case 0:
        console.log('Вы ввели число 0');
        break;

    case 1:
        console.log('Вы ввели число 1');
        break;

    case 2:
    case 3:
        console.log('Вы ввели число 2, а может и 3');
        break;
    default:
        console.log("Ну не то что надо");
}
 */


// 15.Функции

// 1.Задача
//Разницы нет, обе функции работают одинаково

// 2.Задача

/*
function checkAge(age) {
    return age > 18 ? true : confirm('Родители разрешили?');
}
function checkAge(age) {
    return age > 18 || confirm('Родители разрешили?');
}
*/

// 3.Задача
/*
function min(a, b) {
    return a > b ? b : a
}
 */
// 4.Задача
/* 
function pow(x, n) {
    let result = x;
    for (let i = 1; i < n; i++) {
        result *= x
    }
    return result
}
console.log(pow(1, 100))
 */


// 17.Стрелочные функции, основы

let ask = (question, yes, no) => {
    if (question) yes()
    else no();
}

console.log(ask(
    "Вы согласны?",
    () => console.log("Вы согласились."),
    () => console.log("Вы отменили выполнение.")
));







