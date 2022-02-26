// TODO: Mostrar los equipos inscritos por pantalla.

import { teams } from "./teams.js";
import { League } from "./classes/League.js";
import { FootballLeague } from "./classes/FootballLeague.js";
import {setupArrays} from './utils/index.js';


setupArrays();
teams.shuffle();

let ChampionsLeague = new FootballLeague("Champions League", ['A','B','C'],{rounds:1});

console.log('footballLeague.matchDaySchedule',ChampionsLeague.matchDaySchedule);

ChampionsLeague.scheduleMatchDays();

// DONE: Mostrar los equipos  por pantalla.

const teamNames = ChampionsLeague.teams.map((team) => team.name);

teamNames.forEach((team) => {
  console.log(team);
});


console.log(ChampionsLeague.matchDaySchedule);

// DONE: Mostrarla la planificacion  por pantalla.

ChampionsLeague.matchDaySchedule.forEach((matchDay,matchDayIndex)=>{
  console.log(`JORNADA ${matchDayIndex+1}`)
  matchDay.forEach(match=>{

    if (match.home==null || match.away ===null){
        const teamName=match.home || match.away;
        console.log(`${teamName} DESCANSA`)
    } else {
      console.log(`${match.home} vs ${match.away}`)
    }
    
  })

  console.log('==================================')
})

// TODO: Jugar lo partidos de todas las jornadas. Una vez terminada cada jornada, se deberá mostrar cómo queda
//la clasificación de la misma.

ChampionsLeague.start();
// una vez terminada la joranada se debe mostrar como queda la clasificacion de la misma

ChampionsLeague.summaries.forEach((summary,matchDayIndex)=>{
  console.log(`Resultados de la jornada ${matchDayIndex+1}`)

  summary.results.forEach((result)=>{
    console.log(`${result.homeTeamName} ${result.homeGoals} - ${result.awayGoals} ${result.awayTeamName}`)

  })

  console.table(summary.standings)
  console.log('\n')

})

// TODO: Una vez terminada la liga, se mostrarán estádísticas de número de goles totales y total de puntos ganados.
