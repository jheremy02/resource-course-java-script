function pi(n) {
    return Math.PI.toFixed(n);
}

console.log(pi(2));




//with arrow function
let importe=(price,IVA=21)=>price*IVA/100+price;

console.log(importe(100,18));

let texto="Hello";
let texto_reverse= ""



function text_reverse(texto) {

    let text_reverse="";
    for (let index = texto.length-1; index >= 0; index--) {
        
        texto_reverse += texto[index];
        console.log(index)
        console.log(texto[index])
        }

    return texto_reverse;
}

    

console.log(text_reverse("CESAR"))