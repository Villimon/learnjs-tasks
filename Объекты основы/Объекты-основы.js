// 1.Объекты

// 1.Задача
/*
const user = {}
user.name = 'John'
user.surname = 'Qwer'
user.name = 'Marina'
delete user.name
*/

// 2.Задача
/*
const isEmpty = (obj) => {
    for (let key in obj) {
        return false;
    }
    return true
}

const user = {
    name: 'Sasha'
}
isEmpty(user)
*/


// 3.Задача
// Сработает



// 4.Задача
/*
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0
for (let key in salaries) {
    sum += salaries[key]
}
 */
// 5.Задача
/*
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for (let key in obj) {
        if (typeof obj[key] == 'number') {
            obj[key] *= 2
        }
    }
}

multiplyNumeric(menu)
 */



// 4.Методы объекта, "this"

// 1.Задача
// вернет undefined


// 2.Задача
/*
let calculator = {

    read(a, b) {
        this.a = a
        this.b = b
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    }

};
calculator.read(5, 10);
console.log(calculator.sum());
console.log(calculator.mul());
 */
// 3.Задача

/*
let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep: function () { // показывает текущую ступеньку
        console.log((this.step));
        return this
    }
};
 */



// 5.Конструктор, оператор "new"


// 1.Задача
// Если будем возвращать внешний объект в функции конструктор


// 2.Задача
/*
function Calculator(a, b) {

    this.read = function () {
        this.a = a
        this.b = b
    }
    this.sum = function () {
        return this.a + this.b
    }
    this.mul = function () {
        return this.a * this.b
    }
}

let cal = new Calculator(5, 4)
console.log(cal.read())
console.log(cal.sum())
console.log(cal.mul())
 */

// 3.Задача
/* 
function Accumulator(startingValue) {
    this.value = startingValue

    this.read = function (newValue) {
        this.value += newValue
    }

}

let accumulator = new Accumulator(1)
console.log(accumulator.read(1))
console.log(accumulator.value)
console.log(accumulator.read(1))
console.log(accumulator.value)
console.log(accumulator.read(7))
console.log(accumulator.value)

 */





