
let totalFilas=8;

for (let i = 0; i < totalFilas; i++) {
    let fila=[];
    for (let j = 0; j < totalFilas; j++) {
        if ((i+j)%2==0) {
            fila.push('B')
        } else {
            fila.push('N')
        }
        
    }

    console.log(fila.join(' '))
        
}