const promise1 = new Promise((resolve, reject) => reject("Rejected!"));

const promise2 = new Promise((resolve, reject) => resolve("Resolved!"));

const promise3 = new Promise((resolve, reject) => resolve("Resolved 2!"));

Promise.any([promise1, promise2, promise3])
    .then(response => console.log(response));

// Captura la respuesta de cualquiera que se cumpla primero y sea satisfactoria