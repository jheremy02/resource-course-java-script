
drinks=[{name:"lemonade",price:80},{name:"orange",price:10},{name:"maracuya",price:1}]
let drinksShorted=drinks.sort((a, b) => a.price - b.price);

console.log(drinksShorted)