export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
    selectedHeader: {
      type: String,
      default: null,
    },
    showImage: {
      type: Boolean,
      default: false,
    },
  },
  template: `
      <div class="card">
        <h2 class="card-heading">{{ heading }}</h2>
        <div class="flex flex-row items-center justify-center mb3">
          <img class="mr3" v-if="showImage" src="https://placehold.co/120x100"/>
          <h3 v-if="selectedHeader">{{ selectedHeader }}</h3>
        </div>
      </div>
      <div class="card-content">
          <slot></slot> <!-- Slot for additional content, like the select box -->
        </div>
      </div>
    `,
};
