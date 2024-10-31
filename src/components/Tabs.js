export default {
  props: ['selectedCategory', 'selectedPosition'],
  methods: {
    updatePosition(position) {
      this.$emit('update:selectedPosition', position);
    },
  },
  computed: {
    positions() {
      return {
        Offense: ['QB', 'RB', 'LWR', 'RWR', 'SWR', 'TE'],
        Defense: ['DL', 'LB', 'CB', 'S'],
      }[this.selectedCategory];
    },
  },
  template: `
      <div class="position-filters flex items-center justify-center">
        <button 
          v-for="position in positions" 
          :key="position" 
          @click="updatePosition(position)"
          :class="['b pointer f6 link dim br-pill ph3 pv2 mh1', { 'bg-dark-blue white': selectedPosition === position, 'bg-light-gray': selectedPosition !== position }]">
          {{ position }}
        </button>
      </div>
    `,
};
