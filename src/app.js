import Grid from './components/Grid.js'
import Navigation from './components/Navigation.js'
const { createApp } = Vue

createApp({
  components: {
    Navigation,
    Grid,
  },
  setup() {},
  template: `
      <navigation></navigation>
      <grid></grid>
  `,
}).mount('#app')
