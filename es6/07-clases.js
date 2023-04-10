// DECLARANDO
class User {

};

//INSTANCIA DE UNA CLASE
const newUser = new User();

class user {
    // METODOS
    greeting() {
        return "Hello";
    }
};

const subvader = new user();
console.log(subvader.greeting());

// CONSTRUCTOR

class user {
    // CONSTRUCTOR: SE LLAMA CUANDO SE LLAMA LA CLASE
    constructor() {
        console.log("Nuevo usuario creado");
    }

    greeting() {
        return "Hello";
    }
};

const subvader12 = new user();

// THIS

class user {
    // CONSTRUCTOR: SE LLAMA CUANDO SE LLAMA LA CLASE
    constructor(name) {
        this.name = name;
    }

    speak() {
        return "Hello";
    }

    greeting() {
        return `${this.speak()} ${this.name}`;
    }
};

const subvader123 = new user("Jacobo");
console.log(subvader123.greeting());

// SETTERS GETTERS

class user {
    // CONSTRUCTOR
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    // METODOS
    speak() {
        return "Hello";
    };

    greeting() {
        return `${this.speak()} ${this.name}`;
    };

    get uAge() { // AL SER LLAMADO, RETORNA EL VALOR ACTUAL DE AGE
        return this.age;
    }

    set uAge(n) { // AL DETECTAR UN VALOR QUE SE MANDA A uAge, CONVIERTE AGE EN ESE NÚMERO n
        this.age = n;
    }
}

const kranlor12 = new user("Jacobo", 27);
console.log(kranlor12.uAge);
console.log(kranlor12.uAge = 26);