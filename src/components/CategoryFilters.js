export default {
  props: ['selectedCategory'],
  methods: {
    updateCategory(category) {
      this.$emit('update:selectedCategory', category);
    },
  },
  template: `
      <div class="category-filters flex items-center justify-center">
        <button 
          @click="updateCategory('Offense')" 
          :class="['b bw1 mr3 br2 f6 pointer ph3 pv2 mb2 dib', { 'bg-dark-blue white': selectedCategory === 'Offense', 'bg-light-gray': selectedCategory !== 'Offense' }]">
          Offense
        </button>
        <button 
          @click="updateCategory('Defense')" 
          :class="['b bw1 br2 f6 pointer ph3 pv2 mb2 dib', { 'bg-dark-blue white': selectedCategory === 'Defense', 'bg-light-gray': selectedCategory !== 'Defense' }]">
          Defense
        </button>
      </div>
    `,
};
