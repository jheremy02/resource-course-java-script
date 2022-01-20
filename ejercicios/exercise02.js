/* A partir del siguiente array que se proporciona: var valores = [true, 5, false, "hola", "adios", 2];

Determinar cual de los dos elementos de texto es mayor
Utilizando exclusivamente los dos valores booleanos del array,
determinar los operadores necesarios para obtener un resultado true y otro resultado false
Determinar el resultado de las cinco operaciones matemáticas realizadas con los dos elementos numéricos  */

let values =[true, 5, false, "hola", "adios", 2];
var max=0;
var maxString;
let operaciones=['suma','resta','multiplicacion','division']

/*

MI CODIGO

for (const element of values) {
    
    if (typeof element =='string') {
            strings.push(element);
        }

}

if (strings[0].length>strings[1].length) {
    console.log(`${strings[0]} es mayor`)
} else if (strings[0].length<strings[1].length) {
    console.log(`${strings[1]} es mayor`)
} else {
    console.log(`son iguales`)
}

*/

//AHORA OPTIMIZADO

values.forEach(function (value){
    if ((typeof(value)=='string') && (value.length > max)) {
        max=value.length
        maxString=value
    }
});

console.log(maxString)

console.log("----------------------")

for (const operacion of operaciones) {
    
    switch (operacion) {
        case 'suma':
            console.log( `${operacion} : ` + (values[1]+values[5]))
            break
        case 'resta':
            console.log( `${operacion} : ` + (values[1]-values[5]))
            break
        case 'multiplicacion':
            console.log( `${operacion} : ` + (values[1]*values[5]))
            break
        case 'division':
            console.log( `${operacion} : ` + (values[1]/values[5]))
            break
        default:
            break;
    }
}
