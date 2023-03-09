// 1.Рекурсия и стек

// 1.Задача

// Решение с помощью цикла
// const sumTo = (n) => {
//     let start = new Date();
//     let result = 0
//     for (let i = 0; i <= n; i++) {
//         result += i
//     }
//     let end = new Date()
//     console.log(end - start);
//     return result
// }

// Решение через рекурсию
/* const sumTo = (n) => {
    if (n == 0) {
        return n
    } else {
        return n + sumTo(n - 1)
    }
}
 */
// Решение по формуле
/* function sumTo(n) {
    return n * (n + 1) / 2;
}

console.log(sumTo(100)) */

// 2.Задача
/*
const factorial = (n) => {
    return n == 1 ? n : n * factorial(n - 1)
}

console.log(factorial(6))
 */
// 3.Задача
/*
const fib = (n) => {
    return n <= 1 ? n : fib(n - 1) + fib(n - 2)
}

console.log(fib(7))
 */
// 4.Задача
/* let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}; */

/* const printList = (obj) => {
    let next = obj

    while (next) {
        console.log(next.value);
        next = next.next
    }
} */

/* const printList = (obj) => {
    console.log(obj.value);
    if (obj.next) {
        printList(obj.next)
    }
}



console.log(printList(list));
 */
// 5.Задача
/*
const printList = (obj) => {
    let next = obj
    let arr = []
    while (next) {
        arr.push(next.value);
        next = next.next
    }
    arr = arr.reverse()
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);

    }
}
 */
/* const printList = (obj) => {

    if (obj.next) {
        printList(obj.next)
    }
    console.log(obj.value);
}
 */

// console.log(printList(list));



// 3.Замыкание

// 1.Задача
// Ответ: 0,1.

// 2.Задача
// Будет работать, покажет 1,2,1

// 3.Задача
// Функция находится в блоке if, поэтому нам она не доступна

// 4.Задача
/*
function sum(a) {

    return function (b) {
        return a + b
    }
}


console.log(sum(1)(2));
 */
// 5.Задача
/*
let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return function (x) {
        return x >= a && x <= b
    }
}

function inArray(arr) {
    return function (x) {
        return arr.includes(x)
    }
}


console.log(arr.filter(inBetween(3, 6))); // 3,4,5,6

console.log(arr.filter(inArray([1, 2, 10]))); // 1,2

 */
// 6.Задача
/*
let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(fieldName) {
    return function (a, b) {
        return b[fieldName] > a[fieldName] ? -1 : 1
    }
}


console.log(users.sort(byField('name')));
console.log(users.sort(byField('age')));

 */
// 7.Задача

/*
function makeArmy() {
    let shooters = [];


    for (let i = 0; i < 10; i++) {
        let shooter = function () {
            console.log(i);
        };
        shooters.push(shooter);

    }
    return shooters;
}

let army = makeArmy();

army[0]();
army[5]();
army[9]();
 */


// 6.Объект функции, NFE

// 1.Задача
/*
function makeCounter() {
    let count = 0;

    function counter() {
      return count++;
    }

    counter.set = value => count = value;

    counter.decrease = () => count--;

    return counter;
  }
 */
// 2.Задача
/*
function sum(a) {
    console.log(a)
    return function (b) {
        return sum(b + a)
    }

}


console.log(sum(5)(-1)(2));

 */

// 8.Планирование: setTimeout и setInterval

// 1.Задача
/*
function printNumbers(from, to) {
    let num = from
    let timer = setInterval(() => {
        console.log(num)
        if (num == to) {
            clearInterval(timer)
        }
        num++
    }, 1000)

} */
/*
function printNumbers(from, to) {
    let num = from

    setTimeout(function f() {
        console.log(num)
        if (num < to) {
            setTimeout(f, 1000)
        }
        num++
    }, 1000)


}
 */
// console.log(printNumbers(5, 10));


// 2.Задача
// setTimeout выполнится после цикла





// 9.Декораторы и переадресация вызова, call/apply


// 1.Задача
/*
function work(a, b) {
    console.log(a + b); // произвольная функция или метод
}

function spy(func) {


    function wrapper(...args) {
        wrapper.calls.push(args)
        return func.apply(this, args)
    }

    wrapper.calls = []
    return wrapper
}


work = spy(work);

work(1, 2); // 3
work(4, 5); // 9

for (let args of work.calls) {
    console.log('call:' + args.join()); // "call:1,2", "call:4,5"
}
 */

// 2.Задача

/*
function f(x) {
    console.log(x);
}

function delay(f, ms) {

    return function wrapper() {
        setTimeout(() => f.apply(this, arguments), ms)
    }


}


// создаём обёртки
let f1000 = delay(f, 1000);
let f1500 = delay(f, 1500);

f1000("test"); // показывает "test" после 1000 мс
f1500("test"); // показывает "test" после 1500 мс

 */


// 3.Задача
/*
function debounce(f, ms) {

    let isLoading = false

    return function () {
        if (isLoading) return

        f.apply(this, arguments)

        isLoading = true

        setTimeout(() => {
            isLoading = false
        }, ms)
    }


}

function log(x) {
    console.log(x);
}

let f = debounce(log, 1000);

f(1); // выполняется немедленно
f(2); // проигнорирован

setTimeout(() => f(3), 100); // проигнорирован (прошло только 100 мс)
setTimeout(() => f(4), 1100); // выполняется
setTimeout(() => f(5), 1500); // проигнорирован (прошло только 400 мс от последнего вызова)
 */

// 4.Задача
/*
function f(a) {
    console.log(a)
}

function throttle(func, ms) {

    let isThrottled = false
    let savedArgs
    let savedThis

    function wrapper() {

        if (isThrottled) {
            savedArgs = arguments;
            savedThis = this;
            return;
        }

        func.apply(this, arguments)

        isThrottled = true;

        setTimeout(function () {
            isThrottled = false
            if (savedArgs) {
                wrapper.apply(savedThis, savedArgs);
                savedArgs = savedThis = null;
            }
        }, ms);
    }

    return wrapper;
}

let f1000 = throttle(f, 1000);

f1000(1); // показывает 1
f1000(2); // (ограничение, 1000 мс ещё нет)
f1000(3); // (ограничение, 1000 мс ещё нет)

 */

// 10.Привязка контекста к функции

// 1.Задача
// null

// 2.Задача
// Выведет Вася

// 3.Задача
// undefined

// 4.Задача
/*
function askPassword(ok, fail) {
    let password = "rockstar"
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        console.log(`${this.name} logged in`);
    },

    loginFail() {
        console.log(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user));
 */
// 5.Задача

/* 

function askPassword(ok, fail) {
    let password = "rockstar2"
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'John',

    login(result) {
        console.log(this.name + (result ? ' logged in' : ' failed to log in'));
    }
};

askPassword(user.login.bind(user, true), user.login.bind(user, false));

 */
