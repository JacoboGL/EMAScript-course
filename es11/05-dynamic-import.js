const button = document.getElementById("btn");

button.addEventListener("click", async function () {
    const module = await import("./module.mjs");
    console.log(module);
    module.hello();
})

// Junto a module.mjs y el index.html
// Se crea un botón el cual tiene como función importar el modulo y realiza un log en la consola