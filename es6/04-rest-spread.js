// Arrays destructuring

let fruits = ["Apple", "Banana"];
let [a,b] = fruits;

console.log(a, b);

// Object destructuring

let user = {username: "Jacobo", age: 27};
let { username, age } = user;
console.log(username,age);

// Spread operator

let person = { name: "Jacobo", age: 27};
let country = "CO";

let data = { ...person, country };
console.log(data);

// Rest

function sum(num, ...values) { // El primer argumento entra a num, a partir de ahí, se crea un array en values con los demás datos
    console.log(values);
    console.log(num + values[0]);

    return num + values[0];
}

sum(1, 1, 2, 3, 5, 6);