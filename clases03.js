const atacar=(personaje,funcionAtaque)=>{
    let ataque=funcionAtaque(personaje);

    console.log(`${personaje.name} ataca con ${ataque.weapon} :${ataque.attackSpeed} velocidad , causa ${ataque.attackDamage}`)
}

const legolas = {
    name:"lejolas",
    attackSpeed:12,
    attackDamage:4
}

const gimli={
    name:"gimli",
    attackSpeed:4,
    attackDamage:12
}

const aragorn = {
    name:"aragorn",
    attackSpeed:8,
    attackDamage:9
}

const attackWithSword=(personaje)=>{
    return {
        weapon:"sword",
        attackSpeed: personaje.attackSpeed + 4,
        attackDamage: personaje.attackDamage + 4
    }
}

const attackWithHammer=(personaje)=>{
    return {
        weapon:"hammer",
        attackSpeed: personaje.attackSpeed - 1,
        attackDamage: personaje.attackDamage + 9
    }
}

class Personaje {

    constructor(name,attackSpeed,attackDamage) {
        this.name=name
        this.attackSpeed=attackSpeed
        this.attackDamage=attackDamage
    }
    


}

const Gandalf =new Personaje("Gandalf",6,6)

console.log(Gandalf)
atacar(aragorn,attackWithHammer)