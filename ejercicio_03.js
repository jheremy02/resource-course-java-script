/*
Escriba código para crear un patrón de tablero de ajedrez con las palabras "negro" y "blanco" en lugar de colores.
Muestre las nuevas palabras en un cuadro de texto, cuadro de lista o consola.
Cuando haya terminado este ejercicio, debería verse algo como esto:
*/

let colores=['white','black']
let table=[]
for (let i = 0; i < 8; i++) {

    let fila=[]
    for (let j = 0; j < 8; j++) {


        if (j%2==0){
            fila.push(colores[0])
        } else {
            fila.push(colores[1])
        }
        

    }

    if (i%2==1) {
        
        table.push(fila.reverse())
    } else {
        table.push(fila)

    }

    console.log(fila.join('-'))
    
    
}



