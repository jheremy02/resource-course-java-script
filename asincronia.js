function finish() {
    console.log('terminé')

}

function hola() {
    console.log('Hola')

}

function invoca() {
    setTimeout(finish,5000);
    setTimeout(hola,2000);
    console.log('aun no he terminado')
}

invoca()