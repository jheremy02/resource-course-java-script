// TODO: Mostrar los equipos inscritos por pantalla.

import {teams} from './teams.js';
import {League} from './classes/League.js'
import {FootballLeague} from './classes/FootballLeague.js'

console.log(teams)


 


 let anyLeague= new League("superliga",teams)

 console.log(anyLeague.name)
 

 let otherLeague=new League('Conference',["a","b","c"])

 console.log(otherLeague.name)
 

 

 const footballLeagueConfig={
    pointsPerWin:3,
    pointsPerDraw:1,
    pointsPerLose:0,
 }

 let ChampionsLeague=new FootballLeague("Champions League",['A','B','C','D'])
 console.log(ChampionsLeague)

// DONE: Mostrar los equipos  por pantalla.

const teamNames=ChampionsLeague.teams.map(team=>team.name);


teamNames.forEach(team => {
   console.log(team)
});

ChampionsLeague.scheduleMatchDays()

// TODO: Mostrarla la planificacion  por pantalla.
// TODO: Jugar lo partidos de todas las jornadas. Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
// TODO: Una vez terminada la liga, se mostrarán estádísticas de número de goles totales y total de puntos ganados.

