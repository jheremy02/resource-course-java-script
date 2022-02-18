
import {League} from './League.js'

export class FootballLeague extends League {
    constructor(name,teams,config={}){
       super(name,teams,config)
       
    }

    setup(config={}){

       const defaultConfig={
           rounds:1,
           pointsPerWin:3,
           pointsPerDraw:1,
           pointsPerLose:0,
       }

       this.config=Object.assign(defaultConfig,config);
    }

    customizeTeam(teamName){
       //usamos customize para ejecutar el codigo de customizeTeam de la clase padre

        const customizedTeam=super.customizeTeam(teamName)

        //usamos spread operator para agregar los valores de customizedTeam en el erray de return
       return {
           ...customizedTeam,
           points:0,
           goalsFor:0,
           goalsAgainst:0,
           
       }
    }

    play(match) {
        const homeGoals=this.generateGoals();
        const awayGoals=this.generateGoals();

        return {
            homeTeamName:match.home,
            homeGoals,
            awayTeamName:match.away,
            awayGoals
        }

    }

    updateTeams(result){
        const homeTeam = this.teams.find(team=>team.name===result.homeTeamName);
        const awayTeam = this.teams.find(team=>team.name===result.awayTeamName);

        homeTeam.goalsFor+=result.homeGoals;
        homeTeam.goalsAgainst+=result.awayGoals;
        awayTeam.goalsFor+=result.awayGoals;
        awayTeam.goalsAgainst+=result.homeGoals;

        if (result.homeGoals > result.awayGoals){
            // gana el local

            homeTeam.points+=this.config.pointsPerWin;
            awayTeam.points+=this.config.pointsPerLose;
            homeTeam.matchesWon++;
            awayTeam.matchesLost++;

        } else if (result.homeGoals < result.awayGoals) {
            // gana el visitante
            awayTeam.points+=this.config.pointsPerWin;
            homeTeam.points+=this.config.pointsPerLose;
            awayTeam.matchesWon++;
            homeTeam.matchesLost++;

        } else {
            //empatan

            awayTeam.points += this.config.pointsPerDraw
            homeTeam.points += this.config.pointsPerDraw
            homeTeam.matchesDraw++;
            awayTeam.matchesDraw++;
        }

        console.log(homeTeam,awayTeam)

    }



    generateGoals(){
        return Math.floor(Math.random()*10)
    }



}