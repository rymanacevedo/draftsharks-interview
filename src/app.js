import Card from './components/Card.js';
import Cta from './components/Cta.js';
import FooterComponent from './components/Footer.js';
import Grid from './components/Grid.js';
import Navigation from './components/Navigation.js';
const { createApp } = Vue;

createApp({
  components: {
    Navigation,
    Grid,
    Card,
    Cta,
    FooterComponent,
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
        { name: 'Washington Commanders', value: '32' },
      ],
      selectedOption: '1',
      selectedCategory: 'Offense',
      sortPlayersOrder: {
        Offense: 'asc',
        Defense: 'asc',
      },
      selectedPosition: 'QB',
      rosters: {
        1: {
          team: 'Arizona Cardinals',
          positions: {
            Offense: {
              QB: ['Kyler Murray', 'Colt McCoy'],
              RB: ['James Conner', 'Keontay Ingram'],
              WR: ['Marquise Brown', 'Rondale Moore', 'DeAndre Hopkins'],
              TE: ['Zach Ertz', 'Trey McBride'],
            },
            Defense: {
              DL: ['J.J. Watt', 'Zach Allen'],
              LB: ['Isaiah Simmons', 'Zaven Collins'],
              CB: ['Byron Murphy', 'Marco Wilson'],
              S: ['Budda Baker', 'Jalen Thompson'],
            },
          },
        },
        2: {
          team: 'Atlanta Falcons',
          positions: {
            Offense: {
              QB: ['Desmond Ridder', 'Taylor Heinicke'],
              RB: ['Tyler Allgeier', 'Bijan Robinson'],
              WR: ['Drake London', 'Mack Hollins', 'Scotty Miller'],
              TE: ['Kyle Pitts', 'Jonnu Smith'],
            },
            Defense: {
              DL: ['Grady Jarrett'],
              LB: ['Deion Jones'],
              CB: ['A.J. Terrell'],
              S: ['Jaylinn Hawkins'],
            },
          },
        },
        3: {
          team: 'Baltimore Ravens',
          positions: {
            Offense: {
              QB: ['Lamar Jackson', 'Tyler Huntley'],
              RB: ['J.K. Dobbins', 'Gus Edwards'],
              WR: ['Odell Beckham Jr.', 'Rashod Bateman', 'Nelson Agholor'],
              TE: ['Mark Andrews', 'Isaiah Likely'],
            },
            Defense: {
              DL: ['Calais Campbell'],
              LB: ['Patrick Queen'],
              CB: ['Marlon Humphrey'],
              S: ['Marcus Williams'],
            },
          },
        },
        4: {
          team: 'Buffalo Bills',
          positions: {
            Offense: {
              QB: ['Josh Allen', 'Kyle Allen'],
              RB: ['James Cook', 'Damien Harris'],
              WR: ['Stefon Diggs', 'Gabe Davis', 'Trent Sherfield'],
              TE: ['Dawson Knox', 'Dalton Kincaid'],
            },
            Defense: {
              DL: ['Ed Oliver'],
              LB: ['Matt Milano'],
              CB: ["Tre'Davious White"],
              S: ['Jordan Poyer'],
            },
          },
        },
        5: {
          team: 'Carolina Panthers',
          positions: {
            Offense: {
              QB: ['Bryce Young', 'Andy Dalton'],
              RB: ['Miles Sanders', 'Chuba Hubbard'],
              WR: ['Adam Thielen', 'DJ Chark', 'Laviska Shenault Jr.'],
              TE: ['Hayden Hurst', 'Tommy Tremble'],
            },
            Defense: {
              DL: ['Derrick Brown'],
              LB: ['Shaq Thompson'],
              CB: ['Jaycee Horn'],
              S: ['Jeremy Chinn'],
            },
          },
        },
        6: {
          team: 'Chicago Bears',
          positions: {
            Offense: {
              QB: ['Justin Fields', 'P.J. Walker'],
              RB: ['Khalil Herbert', "D'Onta Foreman"],
              WR: ['Darnell Mooney', 'Chase Claypool', 'Velus Jones Jr.'],
              TE: ['Cole Kmet', 'Robert Tonyan'],
            },
            Defense: {
              DL: ['Justin Jones'],
              LB: ['Tremaine Edmunds', 'T.J. Edwards'],
              CB: ['Jaylon Johnson'],
              S: ['Eddie Jackson'],
            },
          },
        },
        7: {
          team: 'Cincinnati Bengals',
          positions: {
            Offense: {
              QB: ['Joe Burrow'],
              RB: ['Joe Mixon', 'Trayveon Williams'],
              WR: ["Ja'Marr Chase", 'Tee Higgins', 'Tyler Boyd'],
              TE: ['Irv Smith Jr.'],
            },
            Defense: {
              DL: ['D.J. Reader'],
              LB: ['Logan Wilson'],
              CB: ['Chidobe Awuzie'],
              S: ['Jessie Bates'],
            },
          },
        },
        8: {
          team: 'Cleveland Browns',
          positions: {
            Offense: {
              QB: ['Deshaun Watson'],
              RB: ['Nick Chubb', 'Jerome Ford'],
              WR: ['Amari Cooper', 'Donovan Peoples-Jones', 'Elijah Moore'],
              TE: ['David Njoku'],
            },
            Defense: {
              DL: ['Myles Garrett'],
              LB: ['Jeremiah Owusu-Koramoah'],
              CB: ['Denzel Ward'],
              S: ['Grant Delpit'],
            },
          },
        },
        9: {
          team: 'Dallas Cowboys',
          positions: {
            Offense: {
              QB: ['Dak Prescott'],
              RB: ['Tony Pollard', 'Malik Davis'],
              WR: ['CeeDee Lamb', 'Michael Gallup', 'Brandin Cooks'],
              TE: ['Jake Ferguson'],
            },
            Defense: {
              DL: ['DeMarcus Lawrence'],
              LB: ['Micah Parsons'],
              CB: ['Trevon Diggs'],
              S: ['Jayron Kearse'],
            },
          },
        },
        10: {
          team: 'Denver Broncos',
          positions: {
            Offense: {
              QB: ['Russell Wilson'],
              RB: ['Javonte Williams', 'Samaje Perine'],
              WR: ['Jerry Jeudy', 'Courtland Sutton', 'KJ Hamler'],
              TE: ['Greg Dulcich'],
            },
            Defense: {
              DL: ['D.J. Jones'],
              LB: ['Josey Jewell'],
              CB: ['Patrick Surtain II'],
              S: ['Justin Simmons'],
            },
          },
        },
        11: {
          team: 'Detroit Lions',
          positions: {
            Offense: {
              QB: ['Jared Goff'],
              RB: ['David Montgomery', 'Jahmyr Gibbs'],
              WR: ['Amon-Ra St. Brown', 'Jameson Williams', 'Kalif Raymond'],
              TE: ['Sam LaPorta'],
            },
            Defense: {
              DL: ['Aidan Hutchinson'],
              LB: ['Alex Anzalone'],
              CB: ['Cameron Sutton'],
              S: ['Tracy Walker'],
            },
          },
        },
        12: {
          team: 'Green Bay Packers',
          positions: {
            Offense: {
              QB: ['Jordan Love'],
              RB: ['Aaron Jones', 'AJ Dillon'],
              WR: ['Christian Watson', 'Romeo Doubs', 'Jayden Reed'],
              TE: ['Luke Musgrave'],
            },
            Defense: {
              DL: ['Kenny Clark'],
              LB: ["De'Vondre Campbell"],
              CB: ['Jaire Alexander'],
              S: ['Darnell Savage'],
            },
          },
        },
        13: {
          team: 'Houston Texans',
          positions: {
            Offense: {
              QB: ['C.J. Stroud'],
              RB: ['Dameon Pierce', 'Devin Singletary'],
              WR: ['Nico Collins', 'Robert Woods', 'Tank Dell'],
              TE: ['Dalton Schultz'],
            },
            Defense: {
              DL: ['Maliek Collins'],
              LB: ['Christian Kirksey'],
              CB: ['Derek Stingley Jr.'],
              S: ['Jalen Pitre'],
            },
          },
        },
        14: {
          team: 'Indianapolis Colts',
          positions: {
            Offense: {
              QB: ['Anthony Richardson'],
              RB: ['Jonathan Taylor', 'Zack Moss'],
              WR: ['Michael Pittman Jr.', 'Alec Pierce', 'Josh Downs'],
              TE: ['Mo Alie-Cox'],
            },
            Defense: {
              DL: ['DeForest Buckner'],
              LB: ['Shaquille Leonard'],
              CB: ['Kenny Moore'],
              S: ['Rodney Thomas II'],
            },
          },
        },
        15: {
          team: 'Jacksonville Jaguars',
          positions: {
            Offense: {
              QB: ['Trevor Lawrence'],
              RB: ['Travis Etienne', 'Tank Bigsby'],
              WR: ['Calvin Ridley', 'Zay Jones', 'Christian Kirk'],
              TE: ['Evan Engram'],
            },
            Defense: {
              DL: ['Roy Robertson-Harris'],
              LB: ['Foyesade Oluokun'],
              CB: ['Tyson Campbell'],
              S: ['Andre Cisco'],
            },
          },
        },
        16: {
          team: 'Kansas City Chiefs',
          positions: {
            Offense: {
              QB: ['Patrick Mahomes'],
              RB: ['Isiah Pacheco', 'Jerick McKinnon'],
              WR: ['Marquez Valdes-Scantling', 'Skyy Moore', 'Kadarius Toney'],
              TE: ['Travis Kelce'],
            },
            Defense: {
              DL: ['Chris Jones'],
              LB: ['Nick Bolton'],
              CB: ["L'Jarius Sneed"],
              S: ['Justin Reid'],
            },
          },
        },
        17: {
          team: 'Miami Dolphins',
          positions: {
            Offense: {
              QB: ['Tua Tagovailoa'],
              RB: ['Raheem Mostert', 'Devon Achane'],
              WR: ['Tyreek Hill', 'Jaylen Waddle', 'Braxton Berrios'],
              TE: ['Durham Smythe'],
            },
            Defense: {
              DL: ['Christian Wilkins'],
              LB: ['Jerome Baker'],
              CB: ['Xavien Howard'],
              S: ['Jevon Holland'],
            },
          },
        },
        18: {
          team: 'Minnesota Vikings',
          positions: {
            Offense: {
              QB: ['Kirk Cousins'],
              RB: ['Alexander Mattison', 'Ty Chandler'],
              WR: ['Justin Jefferson', 'K.J. Osborn', 'Jordan Addison'],
              TE: ['T.J. Hockenson'],
            },
            Defense: {
              DL: ['Harrison Phillips'],
              LB: ['Eric Kendricks'],
              CB: ['Byron Murphy'],
              S: ['Harrison Smith'],
            },
          },
        },
        19: {
          team: 'New England Patriots',
          positions: {
            Offense: {
              QB: ['Mac Jones'],
              RB: ['Rhamondre Stevenson', 'Ezekiel Elliott'],
              WR: ['DeVante Parker', 'JuJu Smith-Schuster', 'Kendrick Bourne'],
              TE: ['Hunter Henry', 'Mike Gesicki'],
            },
            Defense: {
              DL: ['Lawrence Guy'],
              LB: ["Ja'Whaun Bentley"],
              CB: ['Jonathan Jones'],
              S: ['Kyle Dugger'],
            },
          },
        },
        20: {
          team: 'New Orleans Saints',
          positions: {
            Offense: {
              QB: ['Derek Carr'],
              RB: ['Alvin Kamara', 'Jamaal Williams'],
              WR: ['Chris Olave', 'Michael Thomas', 'Rashid Shaheed'],
              TE: ['Juwan Johnson'],
            },
            Defense: {
              DL: ['Cameron Jordan'],
              LB: ['Demario Davis'],
              CB: ['Marshon Lattimore'],
              S: ['Tyrann Mathieu'],
            },
          },
        },
        21: {
          team: 'New York Giants',
          positions: {
            Offense: {
              QB: ['Daniel Jones'],
              RB: ['Saquon Barkley', 'Matt Breida'],
              WR: ['Darius Slayton', 'Isaiah Hodgins', "Wan'Dale Robinson"],
              TE: ['Darren Waller'],
            },
            Defense: {
              DL: ['Dexter Lawrence'],
              LB: ['Bobby Okereke'],
              CB: ["Adoree' Jackson"],
              S: ['Xavier McKinney'],
            },
          },
        },
        22: {
          team: 'New York Jets',
          positions: {
            Offense: {
              QB: ['Aaron Rodgers'],
              RB: ['Breece Hall', 'Dalvin Cook'],
              WR: ['Garrett Wilson', 'Allen Lazard', 'Mecole Hardman'],
              TE: ['Tyler Conklin'],
            },
            Defense: {
              DL: ['Quinnen Williams'],
              LB: ['C.J. Mosley'],
              CB: ['Sauce Gardner'],
              S: ['Jordan Whitehead'],
            },
          },
        },
        23: {
          team: 'Las Vegas Raiders',
          positions: {
            Offense: {
              QB: ['Jimmy Garoppolo'],
              RB: ['Josh Jacobs', 'Ameer Abdullah'],
              WR: ['Davante Adams', 'Hunter Renfrow', 'Jakobi Meyers'],
              TE: ['Austin Hooper'],
            },
            Defense: {
              DL: ['Maxx Crosby'],
              LB: ['Divine Deablo'],
              CB: ['Nate Hobbs'],
              S: ["Tre'von Moehrig"],
            },
          },
        },
        24: {
          team: 'Philadelphia Eagles',
          positions: {
            Offense: {
              QB: ['Jalen Hurts'],
              RB: ["D'Andre Swift", 'Kenneth Gainwell'],
              WR: ['A.J. Brown', 'DeVonta Smith', 'Quez Watkins'],
              TE: ['Dallas Goedert'],
            },
            Defense: {
              DL: ['Fletcher Cox'],
              LB: ['Haason Reddick'],
              CB: ['Darius Slay'],
              S: ['Reed Blankenship'],
            },
          },
        },
        25: {
          team: 'Pittsburgh Steelers',
          positions: {
            Offense: {
              QB: ['Kenny Pickett'],
              RB: ['Najee Harris', 'Jaylen Warren'],
              WR: ['Diontae Johnson', 'George Pickens', 'Calvin Austin III'],
              TE: ['Pat Freiermuth'],
            },
            Defense: {
              DL: ['Cameron Heyward'],
              LB: ['T.J. Watt'],
              CB: ['Levi Wallace'],
              S: ['Minkah Fitzpatrick'],
            },
          },
        },
        26: {
          team: 'Los Angeles Chargers',
          positions: {
            Offense: {
              QB: ['Justin Herbert'],
              RB: ['Austin Ekeler', 'Joshua Kelley'],
              WR: ['Keenan Allen', 'Mike Williams', 'Quentin Johnston'],
              TE: ['Gerald Everett'],
            },
            Defense: {
              DL: ['Sebastian Joseph-Day'],
              LB: ['Joey Bosa'],
              CB: ['J.C. Jackson'],
              S: ['Derwin James'],
            },
          },
        },
        27: {
          team: 'Seattle Seahawks',
          positions: {
            Offense: {
              QB: ['Geno Smith'],
              RB: ['Kenneth Walker III', 'Zach Charbonnet'],
              WR: ['DK Metcalf', 'Tyler Lockett', 'Jaxon Smith-Njigba'],
              TE: ['Noah Fant'],
            },
            Defense: {
              DL: ['Jarran Reed'],
              LB: ['Bobby Wagner'],
              CB: ['Tariq Woolen'],
              S: ['Jamal Adams'],
            },
          },
        },
        28: {
          team: 'San Francisco 49ers',
          positions: {
            Offense: {
              QB: ['Brock Purdy'],
              RB: ['Christian McCaffrey', 'Elijah Mitchell'],
              WR: ['Deebo Samuel', 'Brandon Aiyuk', 'Jauan Jennings'],
              TE: ['George Kittle'],
            },
            Defense: {
              DL: ['Nick Bosa'],
              LB: ['Fred Warner'],
              CB: ['Charvarius Ward'],
              S: ['Talanoa Hufanga'],
            },
          },
        },
        29: {
          team: 'Los Angeles Rams',
          positions: {
            Offense: {
              QB: ['Matthew Stafford'],
              RB: ['Cam Akers', 'Kyren Williams'],
              WR: ['Cooper Kupp', 'Van Jefferson', 'Puka Nacua'],
              TE: ['Tyler Higbee'],
            },
            Defense: {
              DL: ['Aaron Donald'],
              LB: ['Ernest Jones'],
              CB: ['Jalen Ramsey'],
              S: ['Jordan Fuller'],
            },
          },
        },
        30: {
          team: 'Tampa Bay Buccaneers',
          positions: {
            Offense: {
              QB: ['Baker Mayfield'],
              RB: ['Rachaad White', 'Chase Edmonds'],
              WR: ['Mike Evans', 'Chris Godwin', 'Russell Gage'],
              TE: ['Cade Otton'],
            },
            Defense: {
              DL: ['Vita Vea'],
              LB: ['Lavonte David'],
              CB: ['Carlton Davis'],
              S: ['Antoine Winfield Jr.'],
            },
          },
        },
        31: {
          team: 'Tennessee Titans',
          positions: {
            Offense: {
              QB: ['Ryan Tannehill'],
              RB: ['Derrick Henry', 'Tyjae Spears'],
              WR: ['Treylon Burks', 'Nick Westbrook-Ikhine', 'Kyle Philips'],
              TE: ['Chigoziem Okonkwo'],
            },
            Defense: {
              DL: ['Jeffery Simmons'],
              LB: ['Harold Landry'],
              CB: ['Kristian Fulton'],
              S: ['Kevin Byard'],
            },
          },
        },
        32: {
          team: 'Washington Commanders',
          positions: {
            Offense: {
              QB: ['Sam Howell'],
              RB: ['Brian Robinson Jr.', 'Antonio Gibson'],
              WR: ['Terry McLaurin', 'Curtis Samuel', 'Jahan Dotson'],
              TE: ['Logan Thomas'],
            },
            Defense: {
              DL: ['Jonathan Allen', 'Daron Payne'],
              LB: ['Jamin Davis'],
              CB: ['Kendall Fuller'],
              S: ['Kamren Curl'],
            },
          },
        },
      },
    };
  },

  computed: {
    selectedTeamName() {
      const team = this.teams.find(
        (team) => team.value === this.selectedOption,
      );
      return team ? team.name : '';
    },
    selectedTeamPositions() {
      return (
        this.rosters[this.selectedOption]?.positions[this.selectedCategory] ||
        {}
      );
    },
    filteredPlayers() {
      const players = this.selectedTeamPositions[this.selectedPosition] || [];
      return this.sortPlayersOrder[this.selectedCategory] === 'asc'
        ? players.slice().sort()
        : players.slice().sort().reverse();
    },
  },
  methods: {
    toggleSortOrder() {
      this.sortPlayersOrder[this.selectedCategory] =
        this.sortPlayersOrder[this.selectedCategory] === 'asc' ? 'desc' : 'asc';
    },
  },
  template: `
    <navigation></navigation>
    <grid :selectedHeader="selectedTeamName"></grid>

    
    <!-- Card for Selecting a Team -->
    <card showImage="true" heading="Select Team" :selectedHeader="selectedTeamName">
      <div class="flex flex-row align-center justify-center">
        <label class="mr2" for="depthchartform-teamid">Choose a team:</label>
        <select id="depthchartform-teamid" name="DepthChartForm[teamId]" v-model="selectedOption">
          <option v-for="team in teams" :key="team.value" :value="team.value">
            {{ team.name }}
          </option>
        </select>
      </div>
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
     <button @click="toggleSortOrder">
      Sort {{ sortPlayersOrder[selectedCategory] === 'asc' ? 'Descending' : 'Ascending'}}
     </button>
  <table>
  <thead>
  <tr>
  <th>placeholder for player number</th>
  <th>Player Name</th>
  </tr>
  </thead>
  <tbody>
  <tr v-for="(player, index) in filteredPlayers" :key="player">
  <td>{{ index + 1 }}</td>
  <td>{{ player }}</td>
  </tr>
  </tbody>
  <caption>Player Roster</caption>
      </table>
    </card>
    <cta></cta>
    <footer-component></footer-component>
  `,
}).mount('#app');
