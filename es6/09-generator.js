// Se le pone un asterisco a function para identificarlo como generator

function* iterate(array) {
    for (let value of array) {
        yield value;
    }
}

const it =iterate(["Oscar", "Jacobo", "Daniela", "Eugenia", "Matías"]);
console.log(it.next().value);
// A partir del siguiente console log con next, empieza a pasar los valores siguientes, tal como si se hubiera pausado la ejecución
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);
console.log(it.next().value);

// Si ya no hay más valores para mostrar, genera undefined
console.log(it.next().value);