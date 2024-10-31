export default {
  props: {
    selectedCategory: {
      type: String,
      required: true,
    },
    selectedPosition: {
      type: String,
      default: 'QB',
    },
    availablePositions: {
      type: Object,
      required: true, // Expected to be an object with positions as keys and arrays of players as values
    },
  },
  methods: {
    updatePosition(position) {
      this.$emit('update:selectedPosition', position);
    },
  },
  computed: {
    filteredPositions() {
      // Filter positions to only include those with available players
      return {
        Offense: ['QB', 'RB', 'LWR', 'RWR', 'SWR', 'TE'],
        Defense: ['DL', 'DE', 'LB', 'CB', 'S', 'P', 'K', 'LS'],
      }[this.selectedCategory].filter(
        (position) => this.availablePositions[position]?.length > 0,
      );
    },
  },
  template: `
      <div class="position-filters flex items-center justify-center">
        <button 
          v-for="position in filteredPositions" 
          :key="position" 
          @click="updatePosition(position)"
          :class="['b pointer f6 link dim br-pill ph3 pv2 mh1', { 'bg-dark-blue white': selectedPosition === position, 'bg-light-gray': selectedPosition !== position }]">
          {{ position }}
        </button>
      </div>
    `,
};
