class Persona {
    constructor(nombre,edad){
        this.nombre=nombre;
        this.edad=edad;
    }

    saludar() {
        console.log(`Hola mi nombre es ${this.nombre} y tengo ${this.edad}`)
    }

    static definicion(){
        console.log("Los humanos son tan ingenuos e ignorantes , y ala vez , fascinantes")
    }
}

let worker=new Persona('Jheyon',24)

worker.saludar();
Persona.definicion()

class Developer extends Persona {
    static definicion() {
        console.log("I am developer")
    }
}

let backend=new Developer ('Jheyson',24)

Developer.definicion()