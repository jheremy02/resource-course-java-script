/*

Configure una serie de los siguientes instrumentos musicales:

violonchelo
guitarra
violín
contrabajo

Haga un bucle y elimine las vocales. Muestre las nuevas palabras en un cuadro de texto, cuadro de lista o consola.


*/

let musicalInstruments = ['violonchelo','guitarra','violín','contrabajo'];

let vowels=['a','e','i','o','u'];


let newListInstruments=[]
for (let instrument of musicalInstruments){
    

    for(let vowel of vowels){
        const regex= new RegExp(vowel,'g')
        if (instrument.includes(vowel)===true){
            instrument=instrument.replace(regex,'')
        }
    }

    console.log(instrument)
}


