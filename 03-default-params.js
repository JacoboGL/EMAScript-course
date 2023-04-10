function newUser(name, age, country) {

    // Los símbolos || implementados sirven para indicar los parámetros predeterminados para cada una de las variables, si no recibe argumentos de entrada
    var name = name || "Jacobo";
    var age = age || 27;
    var country = country || "PE";

    console.log(name, age, country);
}

newUser(); // Sin argumentos
newUser("Daniela", 26, "CO"); // Con argumentos

//////////// Con el ES6

function newAdmin(name = "Jacobo", age = 27, country = "PE") {
    console.log(name, age, country);
}

newAdmin(); // Sin argumentos
newAdmin("Daniela", 26, "CO"); // Con argumentos
