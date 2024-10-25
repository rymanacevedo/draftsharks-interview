import Navigation from "./components/Navigation.js"
const { createApp } = Vue

createApp({
  components: {
    Navigation,
  },
  setup() {},
  template: `
    <div>
      <navigation></navigation>
    </div>
  `
}).mount('#app')