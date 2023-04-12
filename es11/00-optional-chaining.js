const users = {
    subvader: {
        country: "CO"
    },
    mood: {
        country: "MX"
    }
}

console.log(users.subvader);
console.log(users.mood.country);

// Se puede agregar un simbolo de interrogación para indicar y preguntar la existencia del parámetro y así no romper la aplicación

console.log(users?.samu?.country);

// Al no encontrarlo, regresará un undefined sin romper el flujo de la aplicación