 /*
    Configure una matriz para contener los siguientes valores de cadena:

Beyonce (f)
David Bowie (m)
Elvis Costello (m)
Madonna (f)
Elton John (m)
Charles Aznavour (m)

Escribe un programa para dar vueltas y contar cuántos son vocalistas masculinos y cuántos son femeninos. Muestre su respuesta en un cuadro de texto, cuadro de lista o consola
 */


let list_singers= [{name:'Beyonce',gender:'F'},{name:'David Bowiee',gender:'M'},{name:'Madonna',gender:'F'},{name:'Elton John',gender:'M'}]
let females=0;
let males=0;

for (const singer of list_singers) {
    if (singer.gender=='F'){
        females++;
    } else {
        males++;
    }
    console.log(`${singer.name} (${singer.gender})`);
    
}
console.log(`females : ${females}  males: ${males}`)