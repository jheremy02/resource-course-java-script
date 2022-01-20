

//FUNCION CANONICA
function funcion1(nombre,empleo){
    return `${nombre} es ${empleo}`
};

function hello() {
    let variable='Hello world'
    console.log(variable)
}

hello()

//MEJOR ALMACENAR EL RESULTADO EN UNA VARIABLE

let resultado=funcion1('Jordi','Cachinero')

console.log(resultado);

//ASIGNANDO LA FUNCION A UNA VARIABLE

const funcion02=function (conocimientos) {
    switch (conocimientos.lenght) {
        case 0:
            return "No tiene ni idea"
        case 1 :
            return "Sabe algo"    
        default:
            return "Fucking master"
        
    }
}

console.log(funcion02(["php","python","java"]))

