export default {
    props: {
      heading: {
        type: String,
        required: true
      },
      selectedHeader: {
        type: String,
        default: null
      }
    },
    template: `
      <div class="card">
        <h2 class="card-heading">{{ heading }}</h2>
        <h3 v-if="selectedHeader">{{ selectedHeader }}</h3> <!-- Render selected team name here -->
        <div class="card-content">
          <slot></slot> <!-- Slot for additional content, like the select box -->
        </div>
      </div>
    `
  }
  