const timeOutId=setTimeout(function () {
console.log("Hello world");
 },2000);


clearTimeout(timeOutId)

 console.log(timeOutId)


 console.log('===========')

 let times=0;

 const intervalId=setInterval(()=>{

     console.log('Beeeeeee! 🚀')
     console.log(times)
     times++

     if (times>100) {
         clearInterval(intervalId) // finaliza el interval
     }
 })

 