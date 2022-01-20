

i=1;

do {

    console.log(`The value of i is ${i}`)
    i++

} while (i<10);


languages=['python','java','php','javascript','c++','dart']


//bucle for  forma canonica
for (let index = 0; index < languages.length; index+=2) {
    console.log(index)
    const element = languages[index];
    console.log(`Language in position ${index} is ${element}`)
}

console.log("-----------")

// for of ---> recorre por valor

for (let language of languages){
    console.log(`Language is ${language}`)
}

console.log("-----------")
// for in ---> recorre por indice

for (let index in languages){
    let language=languages[index]
    console.log(`Language is ${language}`)
}
