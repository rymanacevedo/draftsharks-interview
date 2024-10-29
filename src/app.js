import Card from './components/Card.js';
import Grid from './components/Grid.js';
import Navigation from './components/Navigation.js';
const { createApp } = Vue;

createApp({
  components: {
    Navigation,
    Grid,
    Card
  },
  data() {
    return {
      teams: [
        { name: 'Arizona Cardinals', value: '1' },
        { name: 'Atlanta Falcons', value: '2' },
        { name: 'Baltimore Ravens', value: '3' },
        { name: 'Buffalo Bills', value: '4' },
        { name: 'Carolina Panthers', value: '5' },
        { name: 'Chicago Bears', value: '6' },
        { name: 'Cincinnati Bengals', value: '7' },
        { name: 'Cleveland Browns', value: '8' },
        { name: 'Dallas Cowboys', value: '9' },
        { name: 'Denver Broncos', value: '10' },
        { name: 'Detroit Lions', value: '11' },
        { name: 'Green Bay Packers', value: '12' },
        { name: 'Houston Texans', value: '13' },
        { name: 'Indianapolis Colts', value: '14' },
        { name: 'Jacksonville Jaguars', value: '15' },
        { name: 'Kansas City Chiefs', value: '16' },
        { name: 'Las Vegas Raiders', value: '23' },
        { name: 'Los Angeles Chargers', value: '26' },
        { name: 'Los Angeles Rams', value: '29' },
        { name: 'Miami Dolphins', value: '17' },
        { name: 'Minnesota Vikings', value: '18' },
        { name: 'New England Patriots', value: '19' },
        { name: 'New Orleans Saints', value: '20' },
        { name: 'New York Giants', value: '21' },
        { name: 'New York Jets', value: '22' },
        { name: 'Philadelphia Eagles', value: '24' },
        { name: 'Pittsburgh Steelers', value: '25' },
        { name: 'Rookie', value: '34' },
        { name: 'San Francisco 49ers', value: '28' },
        { name: 'Seattle Seahawks', value: '27' },
        { name: 'Tampa Bay Buccaneers', value: '30' },
        { name: 'Tennessee Titans', value: '31' },
        { name: 'Washington Commanders', value: '32' }
      ],
      selectedOption: '1',
      selectedCategory: 'Offense',
      selectedPosition: 'QB',
      rosters: {
        "1": {
          "team": "Arizona Cardinals",
          "positions": {
            "QB": ["Kyler Murray", "Colt McCoy"],
            "RB": ["James Conner", "Keontay Ingram"],
            "LWR": ["Marquise Brown", "Rondale Moore"],
            "RWR": ["DeAndre Hopkins"],
            "SWR": ["Greg Dortch"],
            "TE": ["Zach Ertz", "Trey McBride"]
          }
        },
        "2": {
          "team": "Atlanta Falcons",
          "positions": {
            "QB": ["Desmond Ridder", "Taylor Heinicke"],
            "RB": ["Tyler Allgeier", "Bijan Robinson", "Cordarrelle Patterson"],
            "LWR": ["Drake London"],
            "RWR": ["Mack Hollins"],
            "SWR": ["Scotty Miller"],
            "TE": ["Kyle Pitts", "Jonnu Smith"]
          }
        },
        "3": {
          "team": "Baltimore Ravens",
          "positions": {
            "QB": ["Lamar Jackson", "Tyler Huntley"],
            "RB": ["J.K. Dobbins", "Gus Edwards"],
            "LWR": ["Odell Beckham Jr.", "Rashod Bateman"],
            "RWR": ["Devin Duvernay"],
            "SWR": ["Nelson Agholor"],
            "TE": ["Mark Andrews", "Isaiah Likely"]
          }
        },
        "4": {
          "team": "Buffalo Bills",
          "positions": {
            "QB": ["Josh Allen", "Kyle Allen"],
            "RB": ["James Cook", "Damien Harris", "Latavius Murray"],
            "LWR": ["Stefon Diggs"],
            "RWR": ["Gabe Davis"],
            "SWR": ["Trent Sherfield"],
            "TE": ["Dawson Knox", "Dalton Kincaid"]
          }
        },
        "5": {
          "team": "Carolina Panthers",
          "positions": {
            "QB": ["Bryce Young", "Andy Dalton"],
            "RB": ["Miles Sanders", "Chuba Hubbard"],
            "LWR": ["Adam Thielen"],
            "RWR": ["DJ Chark"],
            "SWR": ["Laviska Shenault Jr."],
            "TE": ["Hayden Hurst", "Tommy Tremble"]
          }
        },
        "6": {
          "team": "Chicago Bears",
          "positions": {
            "QB": ["Justin Fields", "P.J. Walker"],
            "RB": ["Khalil Herbert", "D'Onta Foreman", "Roschon Johnson"],
            "LWR": ["Darnell Mooney"],
            "RWR": ["Chase Claypool"],
            "SWR": ["Velus Jones Jr."],
            "TE": ["Cole Kmet", "Robert Tonyan"]
          }
        },
          "7": {
            "team": "Cincinnati Bengals",
            "positions": {
              "QB": ["Joe Burrow"],
              "RB": ["Joe Mixon", "Trayveon Williams"],
              "LWR": ["Ja'Marr Chase"],
              "RWR": ["Tee Higgins"],
              "SWR": ["Tyler Boyd"],
              "TE": ["Irv Smith Jr."]
            }
          },
          "8": {
            "team": "Cleveland Browns",
            "positions": {
              "QB": ["Deshaun Watson"],
              "RB": ["Nick Chubb", "Jerome Ford"],
              "LWR": ["Amari Cooper"],
              "RWR": ["Donovan Peoples-Jones"],
              "SWR": ["Elijah Moore"],
              "TE": ["David Njoku"]
            }
          },
          "9": {
            "team": "Dallas Cowboys",
            "positions": {
              "QB": ["Dak Prescott"],
              "RB": ["Tony Pollard", "Malik Davis"],
              "LWR": ["CeeDee Lamb"],
              "RWR": ["Michael Gallup"],
              "SWR": ["Brandin Cooks"],
              "TE": ["Jake Ferguson"]
            }
          },
          "10": {
            "team": "Denver Broncos",
            "positions": {
              "QB": ["Russell Wilson"],
              "RB": ["Javonte Williams", "Samaje Perine"],
              "LWR": ["Jerry Jeudy"],
              "RWR": ["Courtland Sutton"],
              "SWR": ["KJ Hamler"],
              "TE": ["Greg Dulcich"]
            }
          },
          "11": {
            "team": "Detroit Lions",
            "positions": {
              "QB": ["Jared Goff"],
              "RB": ["David Montgomery", "Jahmyr Gibbs"],
              "LWR": ["Amon-Ra St. Brown"],
              "RWR": ["Jameson Williams"],
              "SWR": ["Kalif Raymond"],
              "TE": ["Sam LaPorta"]
            }
          },
          "12": {
            "team": "Green Bay Packers",
            "positions": {
              "QB": ["Jordan Love"],
              "RB": ["Aaron Jones", "AJ Dillon"],
              "LWR": ["Christian Watson"],
              "RWR": ["Romeo Doubs"],
              "SWR": ["Jayden Reed"],
              "TE": ["Luke Musgrave"]
            }
          },
          "13": {
            "team": "Houston Texans",
            "positions": {
              "QB": ["C.J. Stroud"],
              "RB": ["Dameon Pierce", "Devin Singletary"],
              "LWR": ["Nico Collins"],
              "RWR": ["Robert Woods"],
              "SWR": ["Tank Dell"],
              "TE": ["Dalton Schultz"]
            }
          },
          "14": {
            "team": "Indianapolis Colts",
            "positions": {
              "QB": ["Anthony Richardson"],
              "RB": ["Jonathan Taylor", "Zack Moss"],
              "LWR": ["Michael Pittman Jr."],
              "RWR": ["Alec Pierce"],
              "SWR": ["Josh Downs"],
              "TE": ["Mo Alie-Cox"]
            }
          },
          "15": {
            "team": "Jacksonville Jaguars",
            "positions": {
              "QB": ["Trevor Lawrence"],
              "RB": ["Travis Etienne", "Tank Bigsby"],
              "LWR": ["Calvin Ridley"],
              "RWR": ["Zay Jones"],
              "SWR": ["Christian Kirk"],
              "TE": ["Evan Engram"]
            }
          },
          "16": {
            "team": "Kansas City Chiefs",
            "positions": {
              "QB": ["Patrick Mahomes"],
              "RB": ["Isiah Pacheco", "Jerick McKinnon"],
              "LWR": ["Marquez Valdes-Scantling"],
              "RWR": ["Skyy Moore"],
              "SWR": ["Kadarius Toney"],
              "TE": ["Travis Kelce"]
            }
          },
          "17": {
            "team": "Miami Dolphins",
            "positions": {
              "QB": ["Tua Tagovailoa"],
              "RB": ["Raheem Mostert", "Devon Achane"],
              "LWR": ["Tyreek Hill"],
              "RWR": ["Jaylen Waddle"],
              "SWR": ["Braxton Berrios"],
              "TE": ["Durham Smythe"]
            }
          },
          "18": {
            "team": "Minnesota Vikings",
            "positions": {
              "QB": ["Kirk Cousins"],
              "RB": ["Alexander Mattison", "Ty Chandler"],
              "LWR": ["Justin Jefferson"],
              "RWR": ["K.J. Osborn"],
              "SWR": ["Jordan Addison"],
              "TE": ["T.J. Hockenson"]
            }
          },
          "19": {
            "team": "New England Patriots",
            "positions": {
              "QB": ["Mac Jones"],
              "RB": ["Rhamondre Stevenson", "Ezekiel Elliott"],
              "LWR": ["DeVante Parker"],
              "RWR": ["JuJu Smith-Schuster"],
              "SWR": ["Kendrick Bourne"],
              "TE": ["Hunter Henry", "Mike Gesicki"]
            }
          },
          "20": {
            "team": "New Orleans Saints",
            "positions": {
              "QB": ["Derek Carr"],
              "RB": ["Alvin Kamara", "Jamaal Williams"],
              "LWR": ["Chris Olave"],
              "RWR": ["Michael Thomas"],
              "SWR": ["Rashid Shaheed"],
              "TE": ["Juwan Johnson"]
            }
          },
          "21": {
            "team": "New York Giants",
            "positions": {
              "QB": ["Daniel Jones"],
              "RB": ["Saquon Barkley", "Matt Breida"],
              "LWR": ["Darius Slayton"],
              "RWR": ["Isaiah Hodgins"],
              "SWR": ["Wan'Dale Robinson"],
              "TE": ["Darren Waller"]
            }
          },
          "22": {
            "team": "New York Jets",
            "positions": {
              "QB": ["Aaron Rodgers"],
              "RB": ["Breece Hall", "Dalvin Cook"],
              "LWR": ["Garrett Wilson"],
              "RWR": ["Allen Lazard"],
              "SWR": ["Mecole Hardman"],
              "TE": ["Tyler Conklin"]
            }
          },
          "23": {
            "team": "Las Vegas Raiders",
            "positions": {
              "QB": ["Jimmy Garoppolo"],
              "RB": ["Josh Jacobs", "Ameer Abdullah"],
              "LWR": ["Davante Adams"],
              "RWR": ["Hunter Renfrow"],
              "SWR": ["Jakobi Meyers"],
              "TE": ["Austin Hooper"]
            }
          },
          "24": {
            "team": "Philadelphia Eagles",
            "positions": {
              "QB": ["Jalen Hurts"],
              "RB": ["D'Andre Swift", "Kenneth Gainwell"],
              "LWR": ["A.J. Brown"],
              "RWR": ["DeVonta Smith"],
              "SWR": ["Quez Watkins"],
              "TE": ["Dallas Goedert"]
            }
          },
          "25": {
            "team": "Pittsburgh Steelers",
            "positions": {
              "QB": ["Kenny Pickett"],
              "RB": ["Najee Harris", "Jaylen Warren"],
              "LWR": ["Diontae Johnson"],
              "RWR": ["George Pickens"],
              "SWR": ["Calvin Austin III"],
              "TE": ["Pat Freiermuth"]
            }
          },
          "26": {
            "team": "Los Angeles Chargers",
            "positions": {
              "QB": ["Justin Herbert"],
              "RB": ["Austin Ekeler", "Joshua Kelley"],
              "LWR": ["Keenan Allen"],
              "RWR": ["Mike Williams"],
              "SWR": ["Quentin Johnston"],
              "TE": ["Gerald Everett"]
            }
          },
          "27": {
            "team": "Seattle Seahawks",
            "positions": {
              "QB": ["Geno Smith"],
              "RB": ["Kenneth Walker III", "Zach Charbonnet"],
              "LWR": ["DK Metcalf"],
              "RWR": ["Tyler Lockett"],
              "SWR": ["Jaxon Smith-Njigba"],
              "TE": ["Noah Fant"]
            }
          },
          "28": {
            "team": "San Francisco 49ers",
            "positions": {
              "QB": ["Brock Purdy"],
              "RB": ["Christian McCaffrey", "Elijah Mitchell"],
              "LWR": ["Deebo Samuel"],
              "RWR": ["Brandon Aiyuk"],
              "SWR": ["Jauan Jennings"],
              "TE": ["George Kittle"]
            }
          },
          "29": {
            "team": "Los Angeles Rams",
            "positions": {
              "QB": ["Matthew Stafford"],
              "RB": ["Cam Akers", "Kyren Williams"],
              "LWR": ["Cooper Kupp"],
              "RWR": ["Van Jefferson"],
              "SWR": ["Puka Nacua"],
              "TE": ["Tyler Higbee"]
            }
          },
          "30": {
            "team": "Tampa Bay Buccaneers",
            "positions": {
              "QB": ["Baker Mayfield"],
              "RB": ["Rachaad White", "Chase Edmonds"],
              "LWR": ["Mike Evans"],
              "RWR": ["Chris Godwin"],
              "SWR": ["Russell Gage"],
              "TE": ["Cade Otton"]
            }
          },
          "31": {
            "team": "Tennessee Titans",
            "positions": {
              "QB": ["Ryan Tannehill"],
              "RB": ["Derrick Henry", "Tyjae Spears"],
              "LWR": ["Treylon Burks"],
              "RWR": ["Nick Westbrook-Ikhine"],
              "SWR": ["Kyle Philips"],
              "TE": ["Chigoziem Okonkwo"]
            }
          },
          "32": {
            "team": "Washington Commanders",
            "positions": {
              "QB": ["Sam Howell"],
              "RB": ["Brian Robinson Jr.", "Antonio Gibson"],
              "LWR": ["Terry McLaurin"],
              "RWR": ["Curtis Samuel"],
              "SWR": ["Jahan Dotson"],
              "TE": ["Logan Thomas"]
            }
          }
      }
    };
  },
  computed: {
    selectedTeamName() {
      const team = this.teams.find(team => team.value === this.selectedOption);
      return team ? team.name : '';
    },
    selectedTeamPositions() {
      return this.rosters[this.selectedOption]?.positions || {};
    },
    filteredPlayers() {
      return this.selectedTeamPositions[this.selectedPosition] || [];
    }
  },
  template: `
    <navigation></navigation>
    <grid :selectedHeader="selectedTeamName"></grid>

    <!-- Card for Selecting a Team -->
    <card heading="Select Team" :selectedHeader="selectedTeamName">
      <label for="depthchartform-teamid">Choose a team:</label>
      <select id="depthchartform-teamid" name="DepthChartForm[teamId]" v-model="selectedOption">
        <option v-for="team in teams" :key="team.value" :value="team.value">
          {{ team.name }}
        </option>
      </select>
    </card>

    <div class="category-filters">
      <button @click="selectedCategory = 'Offense'" :class="{ active: selectedCategory === 'Offense' }">Offense</button>
      <button @click="selectedCategory = 'Defense'" :class="{ active: selectedCategory === 'Defense' }">Defense</button>
    </div>

    <div class="position-filters">
      <button @click="selectedPosition = 'QB'" v-if="selectedCategory === 'Offense'">QB</button>
      <button @click="selectedPosition = 'RB'" v-if="selectedCategory === 'Offense'">RB</button>
      <button @click="selectedPosition = 'LWR'" v-if="selectedCategory === 'Offense'">LWR</button>
      <button @click="selectedPosition = 'RWR'" v-if="selectedCategory === 'Offense'">RWR</button>
      <button @click="selectedPosition = 'SWR'" v-if="selectedCategory === 'Offense'">SWR</button>
      <button @click="selectedPosition = 'TE'" v-if="selectedCategory === 'Offense'">TE</button>
      <button @click="selectedPosition = 'DL'" v-if="selectedCategory === 'Defense'">DL</button>
      <button @click="selectedPosition = 'LB'" v-if="selectedCategory === 'Defense'">LB</button>
      <button @click="selectedPosition = 'CB'" v-if="selectedCategory === 'Defense'">CB</button>
      <button @click="selectedPosition = 'S'" v-if="selectedCategory === 'Defense'">S</button>
    </div>


    <!-- Offense Card with Dynamic Player List -->
    <card :heading="selectedTeamName + ' ' + selectedCategory">
     <h3>{{ selectedPosition }} Players:</h3>
      <ul>
        <li v-for="player in filteredPlayers" :key="player">{{ player }}</li>
      </ul>
    </card>
  `,
}).mount('#app');
