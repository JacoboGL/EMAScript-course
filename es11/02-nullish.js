const anotherNumber = null; 
// Si llega null se vuelve por defecto en el valor 5 o lo que se quiera asignar

const validate = anotherNumber ?? 5;
const validate2 = anotherNumber ?? "Valor nulo!";

console.log(validate);
console.log(validate2);