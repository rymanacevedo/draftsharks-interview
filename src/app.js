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
        { name: 'Washington Commanders', value: '33' }
      ],
      selectedOption: '1' // Default to the first team
    }
  },
  computed: {
    selectedTeamName() {
      const team = this.teams.find(team => team.value === this.selectedOption)
      return team ? team.name : ''
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

    <!-- Other Cards -->
    <card :heading="selectedTeamName + ' Offense'"></card>
    <card :heading="selectedTeamName + ' Defense & Special Teams'"></card>
  `,
}).mount('#app')
