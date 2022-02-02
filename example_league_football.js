// TODO: Mostrar los equipos inscritos por pantalla.

const teams=["PSG","Milan","Real Madrid","Barcelona","Manchester City","Liverpool","Bayer Munich"]

console.log(teams)

// TODO: Crear la planificación de jornadas y partidos de cada jornada.
 class League {
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





    //DONE:Mostrar los equipos inscritos por pantalla
    showTeams(){
        console.log(this.teams)
    }
 }


 let anyLeague= new League("superliga",teams)

 console.log(anyLeague.name)
 anyLeague.showTeams()

 let otherLeague=new League('Conference',["a","b","c"])

 console.log(otherLeague.name)
 otherLeague.showTeams()

 class FootballLeague extends League {
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

 const footballLeagueConfig={
    pointsPerWin:3,
    pointsPerDraw:1,
    pointsPerLose:0,
 }

 let ChampionsLeague=new FootballLeague("Champions League",teams)
 console.log(ChampionsLeague)

// TODO: Mostrarla por pantalla.
// TODO: Jugar lo partidos de todas las jornadas. Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
// TODO: Una vez terminada la liga, se mostrarán estádísticas de número de goles totales y total de puntos ganados.

