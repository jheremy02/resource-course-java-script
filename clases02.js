
class Curso {
    constructor (titulo,dificultad){
        this.titulo=titulo;
        this.dificultad=dificultad;
        this.lecciones=[];
    }

    agregarLeccion(leccion){
        this.lecciones.push(leccion)
    }

    eliminarUltimaLeccion(){
        this.lecciones.pop();
    }


}

const cursoPython=new Curso('Curso definitivo python','Intermedio');

cursoPython.agregarLeccion('Decoradores')
cursoPython.agregarLeccion('Recursividad')
cursoPython.agregarLeccion('Diccionarios')

cursoPython.eliminarUltimaLeccion()

console.log(cursoPython.lecciones)


