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
    imgSrc: {
      type: String,
      default: '', // Allow dynamic URL binding
    },
  },
  template: `
      <div class="card overflow-hidden shadow-3 mr3 ml3 pb3 ba br3 bw0">
        <h2 class="card-heading mt0 pa2 pt3 pb3 bg-light-gray">{{ heading }}</h2>
        <div class="flex flex-row items-center justify-center mb3">
          <img class="mr3" v-if="showImage" :src="imgSrc" />
          <h3 v-if="selectedHeader">{{ selectedHeader }}</h3>
        </div>
        <div class="card-content pa2">
          <slot></slot> <!-- Slot for additional content, like the select box -->
        </div>
      </div>
    `,
};
