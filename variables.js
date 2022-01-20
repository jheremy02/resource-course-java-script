// VAR -->
//alcance global
//si cambia de valor
//scope local

var player="Cristiano Ronaldo";
 function print() {
     console.log(player)
 }

 print()

var player="Toni kroos"

 console.log(player)


//LET -->
//alcanze de bloque
// si cambia e valor

let teamName="Real madrid";

teamName="Chelsea"

teams = ['Chelsea','City','United','Barcelona']

function print_teams(param) {
    let country="Europa"
    for (const iterator of param) {
        console.log(iterator)
    }
}

let country="Africa"

console.log(teamName)
console.log(country)
print_teams(teams)

// CONST--->
//NO CAMBIA SU VALOR
//NO SE PUEDE REASIGNAR
//NO ES INMUTABLE

const league="Española"

league="Calcio"

console.log(league)