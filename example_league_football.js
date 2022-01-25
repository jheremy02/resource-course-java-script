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

    constructor(name,teams,rounds=1){
        this.name=name;
        this.teams=teams;
        this.rounds=rounds;
        //planificacion
        this.matchDaySchedule=[];
        this.scores=[];
        this.matches=[]

    }
 }




// TODO: Mostrarla por pantalla.
// TODO: Jugar lo partidos de todas las jornadas. Una vez terminada cada jornada, se deberá mostrar cómo queda la clasificación de la misma.
// TODO: Una vez terminada la liga, se mostrarán estádísticas de número de goles totales y total de puntos ganados.

