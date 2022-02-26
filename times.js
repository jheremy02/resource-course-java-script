console.log("start")

setTimeout(()=>{
    console.log("continuamos")
},2000)

console.log("finished")


let time=0;
const intervalId=setInterval(()=>{
    console.log("Cuanto falta ?")
        if (time>15) {
            clearInterval(intervalId)
        }
    time++;
},3000)
