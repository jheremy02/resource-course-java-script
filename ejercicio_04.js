
/*

Escribe una función que tome una cadena, la divida y la devuelva con las vocales primero y las consonantes después.
Para cualquier carácter que no sea una vocal (como caracteres especiales o espacios),
trátelos como consonantes.

*/


const vowels=['a','e','i','o','u']
const cadena='andy king'
let arrayCadena=Array.from(cadena)

console.log(arrayCadena)
let vowelsInCadena=[]
let consonantsInCadena=[]
for (let vowel of vowels) {
    if (arrayCadena.includes(vowel)==true){
        const regex= new RegExp(vowel,'g');
        vowelsInCadena.push(vowel);
        arrayCadena=arrayCadena.filter(function(f) {return f!==vowel});
    } 

}


console.log(vowelsInCadena)
console.log(arrayCadena)