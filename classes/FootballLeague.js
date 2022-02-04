
import {League} from './League.js'

export class FootballLeague extends League {
    constructor(name,teams,config={}){
       super(name,teams,config)
       
    }

    setup(config={}){

       const defaultConfig={
           rounds:2,
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


}