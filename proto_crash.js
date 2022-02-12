

//con la prototype pued alterar los metodos de objetos y arrays
//para este ejemplo altero el comportamiento de la built-in function map


Array.prototype.map= function(){
    console.log('triple rashomon')
}


const orochimaru=[]


orochimaru.map()