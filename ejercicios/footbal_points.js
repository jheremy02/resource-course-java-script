let team='Real Madrid'


function footballPoints(matchesWon,matchesDrawed,matchesLosses){
    const wins=3;
    const draws=1;
    const losses=0;

    let points= matchesWon*wins + matchesDrawed*draws + matchesLosses*losses

    return points
}

console.log(footballPoints(3,4,2))

