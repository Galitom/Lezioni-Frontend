class Calculators {
    methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    };

    constructor() {}

    calculate(str) {
        const split = str.split(" ");
        const a = +split[0];
        const op = split[1];
        const b = +split[2];
        return this.methods[op](a, b);
    }

    addMethod = function (name, func) {
        this.methods[name] = func;
    };
}

const calcolatrice = new Calculators();
console.log(calcolatrice.calculate("5 + 3"));
calcolatrice.addMethod("*", (a, b) => a * b);
console.log(calcolatrice.calculate("5 * 3"));

//--------------------------------------------------------------

const lista = [1, 2, 3, 4];
console.log(aCaso(lista));

function aCaso(lista) {
    for (let i = 0; i < lista.length - 1; i++) {
        lista.sort(() => Math.random() - 0.5);
    }
    return lista;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

alert(getAverageAge(arr));

function getAverageAge(users) {
    return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}
