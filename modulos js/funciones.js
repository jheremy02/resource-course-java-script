// example  commonJS

class Player {
    constructor(name,number){
        this.name=name;
        console.log(`New player created ${this.name}` )
    }

    sayHi(){
        console.log(`Hello I am ${this.name}`)
    }
}

module.exports = {
    Player
}