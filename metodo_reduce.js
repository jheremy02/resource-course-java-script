let numbers=[1,2,3,4];

const initialValue=0;

let sumWithInitial=numbers.reduce(function (accumulated,currentValue){return accumulated + currentValue},initialValue)

console.log('========================================')

let players={modric:0,cr7:2,hazard:4};

console.log(players['modric'])