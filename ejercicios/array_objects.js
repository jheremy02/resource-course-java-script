/*
    Escriba una función que convierta un objeto en una matriz, donde cada elemento representa un par clave-valor en forma de matriz.
*/

var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.keys(obj)); 

let arrayKeys=Object.keys(obj)
let arrayValues=Object.values(obj)

let arrayObj=[]

for (let index = 0; index < arrayKeys.length; index++) {
    
    let arrayKeyValue=[arrayKeys[index],arrayValues[index]]

    arrayObj.push(arrayKeyValue)

}

console.log(arrayObj)