export default {
    props: ['players', 'sortOrder'],
    computed: {
      filteredPlayers() {
        return [...this.players].sort((a, b) => 
          this.sortOrder === 'asc' ? a.name.localeCompare(b.name) : b.name.localeCompare(a.name)
        );
      }
    },
    template: `
      <div class="flex justify-center pa4">
        <div class="overflow-auto">
          <table class="custom-table f6 w-100 mw8 center">
            <thead>
              <tr><th>Jersey Number</th><th>Player Name</th></tr>
            </thead>
            <tbody class="lh-copy">
              <tr v-for="player in filteredPlayers" :key="player.name" class="stripe-dark">
                <td class="pa3">{{ player.number }}</td>
                <td class="pa3">{{ player.name }}</td>
              </tr>
            </tbody>
            <caption class="mt2">Player Roster</caption>
          </table>
        </div>
      </div>
    `
  };
  