/*
Su tarea es crear un constructor Circle que cree un círculo con un radio proporcionado por un argumento.
Los círculos construidos deben tener dos métodos getArea()(PI * r ^ 2) y getPerimeter()(2 * PI * r) que dan
las áreas y el perímetro (circunferencia) respectivos.
*/

class Circle {
    constructor(radio){
        this.radio=radio;
    }

    getArea(){
        return (Math.PI*Math.pow(this.radio,2))
    }

    getPerimeter(){
        return (2*Math.PI*this.radio)
    }
}

let circle01=new Circle(10)

console.log(circle01.getArea())
console.log(circle01.getPerimeter())