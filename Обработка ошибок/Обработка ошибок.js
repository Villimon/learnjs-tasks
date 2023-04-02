// 1.Обработка ошибок, "try..catch"
// finally гарантирует очистку.

// 2.Пользовательские ошибки, расширение Error
/* 
class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = "FormatError";
    }
}

let err = new FormatError("ошибка форматирования");

console.log(err.message);
console.log(err.name);
console.log(err.stack);

console.log(err instanceof SyntaxError);  */