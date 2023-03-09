// 1.Прототипное наследование

// 1.Задача
// true
// null
// undefined

// 2.Задача
/*
let head = {
    glasses: 1
};

let table = {
    pen: 3,
    __proto__: head
};

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
};

let pockets = {
    money: 2000,
    __proto__: bed
};

 */

// 3.Задача
// rabbit

// 4.Задача
// Можно в каждый наследуемый объект поместить массив stomach и в таком случае у каждого хзосяка будет свой желудок


// 2.F.prototype

// 1.Задача
// true
// false
// true
// undefined

// 2.Задача
/*
function User(name) {
    this.name = name;
}
let user = new User('John');
let user2 = new user.constructor('Pete');
 */

// 3.Встроенные прототипы

// 1.Задача
/*
function f() {
    console.log("Hello!");
}

Function.prototype.defer = function (ms) {
    setTimeout(this, ms)
}

f.defer(1000); // выведет "Hello!" через 1 секунду
 */


// 2.Задача
/*
function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function (ms) {
    let th = this
    // this = функция к которая применяется этот метод
    return function (...args) {
        // args = (1,2)
        setTimeout(() => th.apply(this, args), ms)

    }
}

f.defer(1000)(1, 2); // выведет 3 через 1 секунду.

 */

// 4.Методы прототипов, объекты без свойства __proto__

// 1.Задача
/*
let dictionary = Object.create(null, {
    toString: {
        value() {
            return Object.key(this).join()
        }
    }
});

// ваш код, который добавляет метод dictionary.toString

// добавляем немного данных
dictionary.apple = "Apple";
dictionary.__proto__ = "test"; // здесь __proto__ -- это обычный ключ

// только apple и __proto__ выведены в цикле
for (let key in dictionary) {
    console.log(key); // "apple", затем "__proto__"
}

// ваш метод toString в действии
console.log(dictionary); // "apple,__proto__"
 */
// 2.Задача
/* 
function Rabbit(name) {
    this.name = name;
}
Rabbit.prototype.sayHi = function () {
    console.log(this.name);
};

let rabbit = new Rabbit("Rabbit");


// rabbit.sayHi(); Rabbit
// Rabbit.prototype.sayHi(); undefined
// Object.getPrototypeOf(rabbit).sayHi();undefined
// rabbit.__proto__.sayHi();undefined


 */







