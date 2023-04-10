const list = new Set();

list.add("Item 1");
list.add("Item 2").add("Item 3");

console.log(list)

// Cómo quitar los elementos repetidos en una sola línea

// 👨‍💻 Para crear un array sin elementos repetidos, podemos utilizar Set y el operador de propagación de la siguiente manera:

const array = [1, 1, 2, 2, 3, 4, 4, 5]

const sinRepetidos = [ ... new Set(array)]
console.log(sinRepetidos) // [ 1, 2, 3, 4, 5 ]
