import Card from './components/Card.js'
import Grid from './components/Grid.js'
import Navigation from './components/Navigation.js'
const { createApp } = Vue

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
        { name: 'Chicago Bears', value: '6' }
      ],
      selectedOption: '1',
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
        }
      }
    }
  },
  computed: {
    selectedTeamName() {
      const team = this.teams.find(team => team.value === this.selectedOption)
      return team ? team.name : ''
    },
    selectedTeamPositions() {
      return this.rosters[this.selectedOption]?.positions || {}
    }
  },
  template: `
    <navigation></navigation>
    <grid></grid>

    <!-- Card for Selecting a Team -->
    <card heading="Select Team" :selectedHeader="selectedTeamName">
      <label for="depthchartform-teamid">Choose a team:</label>
      <select id="depthchartform-teamid" name="DepthChartForm[teamId]" v-model="selectedOption">
        <option v-for="team in teams" :key="team.value" :value="team.value">
          {{ team.name }}
        </option>
      </select>
    </card>

    <!-- Offense Card with Dynamic Player List -->
    <card heading="Offense">
      <h3>Quarterbacks (QB):</h3>
      <ul>
        <li v-for="player in selectedTeamPositions.QB" :key="player">{{ player }}</li>
      </ul>
      <h3>Running Backs (RB):</h3>
      <ul>
        <li v-for="player in selectedTeamPositions.RB" :key="player">{{ player }}</li>
      </ul>
      <!-- Add other positions as needed -->
    </card>

    <!-- Defense & Special Teams Card -->
    <card heading="Defense & Special Teams">
      <h3>Tight Ends (TE):</h3>
      <ul>
        <li v-for="player in selectedTeamPositions.TE" :key="player">{{ player }}</li>
      </ul>
      <!-- Add other defensive positions or special teams as needed -->
    </card>
  `,
}).mount('#app')
