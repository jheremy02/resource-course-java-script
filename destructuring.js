
const player={name:'Cristiano',number:7,team:'Manchester United',country:'Portugal'}


//let {name,country}=player

//console.log(name,country)

console.log("========================================================")

let  [ ...lastName]= "Cristiano Ronaldo".split(' ')


console.log(lastName)

const arr=[1,2]

const [a,b,c=6]=arr;

const iteratorOfArr=arr.entries();

console.log(iteratorOfArr)


for (const [index,value] of iteratorOfArr) {
 console.log(`${index} ${value}`)
}

console.log(a,b,c)