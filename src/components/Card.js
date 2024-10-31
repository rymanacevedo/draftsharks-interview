export default {
  props: {
    heading: {
      type: String,
      required: true,
    },
  },
  template: `
      <div class="card overflow-hidden shadow-3 mr3 ml3 ba br3 bw0 mw6-m center-m">
        <h2 class="card-heading mt0 mb0 pa2 pt3 pb3 bg-light-gray">{{ heading }}</h2>
        <div class="card-content pa2">
          <slot></slot> <!-- Slot for additional content, like the select box -->
        </div>
      </div>
    `,
};
