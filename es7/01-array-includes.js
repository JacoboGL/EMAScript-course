let numbers = [1, 3, 4, 6, 7, 8, 2];

console.log(numbers.includes(4));

//Includes, pero en objetos

// 🔗 En objetos también existen formas para saber si existe una propiedad. Estos son:

//    La palabra reservada in
//    El método de objetos hasOwnProperty
//    El método Object.hasOwn, que recibe el objeto y la propiedad a evaluar.

const letras = { a: 1, b: 2, c: 3 }

"a" in letras // true
letras.hasOwnProperty("a") // true
Object.hasOwn(letras, "a") // true
