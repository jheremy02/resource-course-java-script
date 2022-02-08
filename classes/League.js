
 export class League {
    // name
    // teams
    // rounds
    // players
    // matchDays
    // matches
    // results
    // scores

   constructor(name,teams,config={}){
       this.name=name;
       this.setupTeams(teams);
       this.setup(config)
       //planificacion
       this.matchDaySchedule=[];
       this.scores=[];
       this.matches=[]

   }

   setup(config={}){
       const defaultConfig={rounds:1};
       this.config=Object.assign(defaultConfig,config);

   }

   setupTeams(teams){
       this.teams=[];
       for (let teamName of teams) {
           
           let teamObj=this.customizeTeam(teamName)
           
           // añadimos el objectp desriptivo del equipo al array de equipos

           this.teams.push(teamObj)
       }

   }

   customizeTeam(teamName){
       return {
           name:teamName,
           matchesWon:0,
           matchesDraw:0,
           matchesLost:0
       }
   }

// TODO: Crear la planificación de jornadas y partidos de cada jornada.
scheduleMatchDays(){

    // Planificacion es un conjunto de jornadas //planificacion=[j1,j2,j3,j4 ...]
    //Jornada es un conjunto de partidos //jornada=[p1,p2,p3,p4 ...]
    //Partido tiene local y visitante  // partido= {local:'local , visitante:'visitante'}
    

    //inicializamo la planificacion
    this.matchDaySchedule=[]
    const numberOfMatchesDays=this.teams.length-1;//numero de jornadas
    const numberOfMatchPerDay=this.teams.length/2// numero de partidospor jornada
 


    //recorremos para componer la jornada
    for (let i = 0; i < numberOfMatchesDays ; i++) {
        //jornada vacia
        const matchDay=[]
        for(let j=0;j<numberOfMatchPerDay;j++){
            let match={home:'home',away:'away'}
            //llenamos la jornada de partidos
            matchDay.push(match)
        }
        // jornada llena , la ponemos en la planificacion

        this.matchDaySchedule.push(matchDay)

    }
  }
 

}