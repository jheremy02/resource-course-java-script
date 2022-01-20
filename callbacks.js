//CALLBACKS

function callback() {
    console.log("Hello world")
}


function mensaje(fn) {
    fn();
}

mensaje(callback);

zfighters=['Goku','Vegeta','Gohan','Piccolo']

zfighters.forEach((name,index)=>console.log(index + 1 + ' '+name)
 
);

setTimeout(function(){
    console.log('Hello world')
},2000)