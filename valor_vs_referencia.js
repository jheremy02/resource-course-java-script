// POR VALOR

let numero = 21;

const funcionValor=(value)=>{
    value*=10;
    console.log(`Dentro de la funcion, value es ${value}`)
}

funcionValor(numero)
console.log(`Fuera de la funcion, value es ${numero}`)


console.log("---------------------------------------")

//POR REFERENCIA

let arrNumeros = [numero];

const funcionReferencia=(value)=>{
    value[0]*=10;
    console.log(`Dentro de la funcion, value es ${value[0]}`)
}

funcionReferencia(arrNumeros)
console.log(`Fuera de la funcion , value es ${arrNumeros[0]} `)


