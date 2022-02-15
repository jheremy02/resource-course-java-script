export class League {
  // name
  // teams
  // rounds
  // players
  // matchDays
  // matches
  // results
  // scores

  constructor(name, teams, config = {}) {
    this.name = name;
    this.setupTeams(teams);
    this.setup(config);
    //planificacion
    this.matchDaySchedule = [];
    //this.scores = [];
    //this.matches = [];
  }

  setup(config = {}) {
    const defaultConfig = { rounds: 1 };
    this.config = Object.assign(defaultConfig, config);
  }

  setupTeams(teams) {
    this.teams = [];
    for (let teamName of teams) {
      let teamObj = this.customizeTeam(teamName);

      // añadimos el objectp desriptivo del equipo al array de equipos

      this.teams.push(teamObj);
    }
  }

  customizeTeam(teamName) {
    return {
      name: teamName,
      matchesWon: 0,
      matchesDraw: 0,
      matchesLost: 0,
    };
  }


  createRound(){
    const round=[];
    this.initSchedule(round);
    this.setLocalTeams(round);
    this.setAwayTeams(round);
    this.fixLastTeamSchedule(round);

    return round
  }

  scheduleMatchDays(){

    for (let i=0 ; i < this.config.rounds; i++) {
      const round= this.createRound();
      //si la jornada es impar , giramos los partidos
      if (i % 2 === 1) {
        this.swapTeamsWithinMatches(round)
      }

      this.matchDaySchedule=this.matchDaySchedule.concat(round)
    }
      
   
  }


  swapTeamsWithinMatches(round){
    for (const matchDay of round) {
      for (const match of matchDay) {
        const copyMatch = { ...match };
        
          const localTeam = match.home;
          match.home = match.away;
          match.away = localTeam;
        }
        
      }
  }

  // TODO: Crear la planificación de jornadas y partidos de cada jornada.
  
  /*scheduleMatchDays() {
    // generamos el layout de la planificacion
    this.initSchedule();

    //ponemos los equipos locales
    this.setLocalTeams();

    this.setAwayTeams();

    this.fixLastTeamSchedule();


    // nos hacemos una copia de la  ronda original para tener una referncia hacia los partidos
    //de esta forma siempre tendremos el mismo numero de jornadas y ya no jalamos los que vayamos agregando
    const originalRound = [...this.matchDaySchedule];

    //si hay mas de una ronda

    if (this.config.rounds > 1) {
      // para cada ronda extra
      for (let i = 1; i < this.config.rounds; i++) {
        //hacemos copia de la primera ronda
        const newRound = [];

        // intercambiamos home y away de los partidos

        for (const matchDay of originalRound) {
          const newMatchDay = [];
          for (const match of matchDay) {
            const copyMatch = { ...match };
            // si la ronda es impar
            if (i % 2 === 1) {
              const tempHomeTeam = copyMatch.home;
              copyMatch.home = copyMatch.away;
              copyMatch.away = tempHomeTeam;
            }
            newMatchDay.push(copyMatch);
          }
          // jornada llena , la ponemos en la planificacion

          newRound.push(newMatchDay);
        }
        this.matchDaySchedule.push(...newRound);
      }
    }
  } */

  //obtiene los nombres de los nombres de equipos para la planificacion y printarlo en pantalla
  getTeamNames() {
    return this.teams.map((team) => team.name);
  }

  getTeamNamesForSchedule() {
    const teamNames = this.getTeamNames();

    if (teamNames.length % 2 == 0) {
      return teamNames;
    } else {
      return [...teamNames, null]; // [A,B,C,D,NULL]
    }
  }

  initSchedule(round) {
    // Planificacion es un conjunto de jornadas //planificacion=[j1,j2,j3,j4 ...]
    //Jornada es un conjunto de partidos //jornada=[p1,p2,p3,p4 ...]
    //Partido tiene local y visitante  // partido= {local:'local , visitante:'visitante'}

  
    const numberOfMatchesDays = this.getTeamNamesForSchedule().length - 1; //numero de jornadas
    const numberOfMatchPerMatchDay = this.getTeamNamesForSchedule().length / 2; // numero de partidos por jornada

    //recorremos para componer la jornada
    for (let i = 0; i < numberOfMatchesDays; i++) {
      //jornada vacia
      const matchDay = [];
      for (let j = 0; j < numberOfMatchPerMatchDay; j++) {
        let match = { home: "home", away: "away" };
        //llenamos la jornada de partidos
        matchDay.push(match);
      }
      // jornada llena , la ponemos en la planificacion

      round.push(matchDay);
    }
  }

  setLocalTeams(round) {
    const teamNames = this.getTeamNamesForSchedule(); // teamNames=['A','B','C','D']
    let teamIndex = 0;
    const teamIndexMaxValue = teamNames.length - 2;

    round.forEach((matchDay) => {
      matchDay.forEach((match) => {
        match.home = teamNames[teamIndex];
        teamIndex++;

        if (teamIndex > teamIndexMaxValue) {
          teamIndex = 0;
        }
      });
    });
  }

  setAwayTeams(round) {
    const teamNames = this.getTeamNamesForSchedule(); // extraigo los nombres de equipo de los objetos y los guardo en una variable
    const maxAwayTeams = teamNames.length - 1;
    let teamIndex = maxAwayTeams - 1;

    round.forEach((matchDay) => {
      matchDay.forEach(function (match, matchIndex) {
        if (matchIndex === 0) {
          match.away = teamNames[maxAwayTeams];
        } else {
          match.away = teamNames[teamIndex];
          teamIndex--;

          if (teamIndex < 0) {
            teamIndex = maxAwayTeams - 1;
          }
        }
      });
    });
  }

  fixLastTeamSchedule(round) {
    round.forEach((matchDay, matchIndex) => {
      // si la joranada es impar , le damos la vuelta al primer partido de la jornada

      if (matchIndex % 2 === 1) {
        //ej: {home:'E',away:'D'} =>  {home:'D',away:'E'}
        const firstMatch = matchDay[0];
        const temp = firstMatch.home;

        firstMatch.home = firstMatch.away;
        firstMatch.away = temp;
      }
    });
  }
}
