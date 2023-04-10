// enhaced object literals

function newUser(user, age, country, uId){
    return {
        user,
        age,
        country,
        id: uId
    }
}

console.log(newUser("subvader", 27, "CO", 1));