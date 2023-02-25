// 1.Методы примитивов

// 1.Задача
// Что нет такого метода у строки


// 2.Числа


// 1.Задача
/* let a = '2'
let b = '5'
console.log(+a + +b) */


// 2.Задача
// Чтобы избежать такого, нужно число умножить на 10


// 3.Задача
/*
function readNumber() {
    let num;

    while (!isFinite(num)) {
        num = prompt('введите число')
    }
    if (num === null || num === '') return null

    return +num
}
 */
// 4.Задача
// Теряется точно из-за дробей

// 5.Задача
/*
function random(min, max) {
    return min + Math.random() * (max - min)
}
console.log(random(1, 5))
 */
// 6.Задача
/*
function randomInteger(min, max) {
    return Math.round(min + Math.random() * (max - min))
}
console.log(randomInteger(1, 5))

 */


// 3.Строки

// 1.Задача
/*
function ucFirst(str) {
    return str[0].toUpperCase() + str.slice(1)
}
console.log(ucFirst('саша'));
 */
// 2.Задача
/*
function checkSpam(str) {
    str = str.toLowerCase()
    return str.includes('viagra') || str.includes('XXX'.toLowerCase())

}
console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
 */
// 3.Задача
/*
function truncate(str, maxlength) {
    return str.length > maxlength ? str.slice(0, maxlength) + '...' : str
}
console.log(truncate('Вот, что мне хотелось бы сказать на эту тему:', 20));
console.log(truncate('Всем привет!', 20));
*/
// 4.Задача
/*
function extractCurrencyValue(str) {
    return +str.slice(1);
}
console.log(extractCurrencyValue('$120'));
*/


// 4.Массивы

// 1.Задача
// Выведется 4

// 2.Задача
/*
const styles = ['Джаз', 'Блюз']
styles.push('Рок-н-ролл')
styles[Math.floor(styles.length / 2)] = 'Классика'
console.log(styles);
console.log(styles.shift());
styles.unshift("Рэп", "Регги");
*/
// 3.Задача
// Выведет весь массив

// 4.Задача
/*
function sumInput() {

    let numbers = [];

    while (true) {

        let value = prompt("Введите число", 0);

        if (value === "" || value === null || !isFinite(value)) break;

        numbers.push(+value);
    }

    let sum = 0;
    for (let number of numbers) {
        sum += number;
    }
    return sum;
}

console.log((sumInput()));
 */



// 5.Методы массивов

// 1.Задача

/*
function camelize(str) {
    arr = str.split('-').map((item, index) => {
        return index !== 0 ? item[0].toUpperCase() + item.slice(1) : item
    })
    return arr.join('')
}
console.log(camelize("-webkit-transition"));
 */


// 2.Задача
/*
let arr = [5, 3, 8, 1];
function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b)
}
console.log(filterRange(arr, 1, 4));
 */


// 3.Задача
/*
let arr = [5, 2, 1, -10, 8];
const sotr = (array) => {
    return array.sort((a, b) => b - a)
}
console.log(sotr(arr))
*/


// 4.Задача
/*
let arr = ["HTML", "JavaScript", "CSS"];
const sotrNewArray = (array) => {
    let newArray = array.slice(0)
    return newArray.sort()
}
console.log(sotrNewArray(arr))
console.log(arr)
 */


// 5.Задача
/*
function Calculator() {

    this.methods = {
        '-': (a, b) => a - b,
        '+': (a, b) => a + b
    }


    this.calculate = function (str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]


        return this.methods[op](a, b);
    }


    this.addMethods = function (name, func) {
        this.methods[name] = func;
    }

}

let calc = new Calculator;
calc.addMethods("*", (a, b) => a * b)
let result = calc.calculate("2 + 3");

console.log(result);
 */


// 6.Задача
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name)
console.log(names); */


// 7.Задача
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let usersMapped = users.map(item => ({
    id: item.id,
    fullName: item.name + ' ' + item.surname
}))
console.log(usersMapped);
 */
// 8.Задача
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let arr = [vasya, petya, masha];

function sortByAge(arr) {
    arr.sort((a, b) => a.age - b.age)
}

sortByAge(arr);
console.log(arr);
*/


// 9.Задача
/*
let arr = [1, 2, 3];


const shuffle = (arr) => {
    return arr.sort(() => Math.random() - 0.5);
}
console.log(shuffle(arr))
 */
// 10.Задача
/*
let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

const getAverageAge = (arr) => {
    const result = arr.reduce((sum, cur) => sum + cur.age, 0)
    return result / arr.length
}

console.log(getAverageAge(arr));
 */
// 11.Задача
/*
function unique(arr) {
    return arr.filter((item, index) => arr.indexOf(item) == index)
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings))
 */
// 12.Задача
/*
let users = [
    { id: 'john', name: "John Smith", age: 20 },
    { id: 'ann', name: "Ann Smith", age: 24 },
    { id: 'pete', name: "Pete Peterson", age: 31 },
];

let usersById = groupById(users);

function groupById(arr) {
    return arr.reduce((obj, item) => {
        obj[item.id] = item
        return obj
    }, {})
}

console.log(usersById)

 */


// 7.Map и Set

// 1.Задача
/*
 function unique(arr) {
    return Array.from(new Set(arr));
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values));
 */

// 2.Задача
/*
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let map = new Map();

    for (let word of arr) {
        const result = word.toLowerCase().split('').sort().join('')
        map.set(result, word)
    }
    return Array.from(map.values())
}

console.log(aclean(arr))
 */
// 3.Задача
// let keys = Array.from(map.keys());


// 8.WeakMap и WeakSet

// 1.Задача
// Можно использовать WeakSet и хранить сообщения там

// 2.Задача
// Можно использовать WeakMap, чтобы ключом у нас был объект с сообщением, а значением выступала дата


// 9.Object.keys, values, entries


// 1.Задача
/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const sumSalaries = (obj) => {
    let result = 0
    for (let sum of Object.values(obj)) {
        result += sum
    }
    return result
}


console.log(sumSalaries(salaries))
*/


// 2.Задача
/*
let user = {
    name: 'John',
    age: 30,
    asd: 30
};

const count = (obj) => {
    return Object.entries(obj).length
}

console.log(count(user));

 */




// 10.Деструктурирующее присваивание


// 1.Задача
/*
let user = {
    name: "John",
    years: 30
};

let { name, years: age, isAdmin = false } = user
console.log(name);
console.log(age);
console.log(isAdmin); */
// 2.Задача
/*
let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

const topSalary = (obj) => {
    let max = 0
    let maxName = null
    for (let [name, salary] of Object.entries(obj)) {
        if (salary > max) {
            max = salary
            maxName = name
        }
    }
    return maxName

}

console.log(topSalary(salaries))
 */




// 11.Дата и время

// 1.Задача
// let date = new Date(2012, 1, 20, 3, 12)

// 2.Задача
/*
let date = new Date(2012, 0, 3);

const getWeekDay = (d) => {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ']
    return days[d.getDay()]
}


console.log(getWeekDay(date)); */

// 3.Задача
/*
let date = new Date(2012, 0, 3);

const getLocalDay = (d) => {
    let day = d.getDay()
    if (day === 0) {
        day = 7
    }
    return day
}

console.log(getLocalDay(date));
 */
// 4.Задача
/*
let date = new Date(2015, 0, 2);

const getDateAgo = (d, days) => {
    d.setDate(d.getDate() - days);
    return d.getDate();
}

console.log(getDateAgo(date, 1));
console.log(getDateAgo(date, 2));
console.log(getDateAgo(date, 365));
 */

// 5.Задача
/*
function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0)
    return date.getDate()
}

console.log(getLastDayOfMonth(2012, 0)); // 31
console.log(getLastDayOfMonth(2012, 1)); // 29
console.log(getLastDayOfMonth(2013, 1))// 28
 */

// 6.Задача
/*
function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

console.log(getSecondsToday()); */
// 7.Задача
/*
function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

    let result = tomorrow - now;
    return Math.round(result / 1000);
}

console.log(getSecondsToTomorrow()); */


// 12.Формат JSON, метод toJSON


// 1.Задача
/*
let user = {
    name: "Василий Иванович",
    age: 35
};

let json = JSON.stringify(user)
let obj = JSON.parse(json)
console.log(obj); */
// 2.Задача
/* let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
}));
 */
























