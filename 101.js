
//

const role='Teacher'
const teacherName='Jordi' //camelCase

const phrase1='The '+role+' is'+teacherName
const phrase2= `the ${role} is ${teacherName}`


//como acceder a las propiedades de los objetos

let myObj = {
    name:'keyboard',
    price:32.9,
    ISOCode:'ES'
}

//acceder a ISOCODE de myObj

myObj.ISOCode='EN';

//sumarle 10 al precio de myObjt

myObj.price=myObj.price+10;



//como acceder a los elementos de un array

let myArr=['Jordi',role,myObj,true,false,undefined,null,NaN]


// acceder al role

myArr[1]===role






