export default {
    props: {
        selectedHeader: {
            type: String,
            required: true
        }
    },
  template: `
    <div class="green-grid-bg title-bar flex flex-column center">
        <h1 class="flex flex-row align-center justify-center">
            <svg class="h2" enable-background="new 0 0 65 65" viewBox="0 0 65 65" xmlns="http://www.w3.org/2000/svg">
                <path d="m65 27.97h-20.06v-7.46h-13.22v-5.24h17.63v-13.9h-38.4v13.9h17.64v8.37h13.22v4.33h-15.21v13.9h24.49v13.25l-12.69.09v-5.48h-38.4v13.9h38.4v-5.29l15.82-.11v-16.36h10.78z" fill="#fff"></path>
            </svg>
            <span class="white">{{selectedHeader}} Depth Charts</span>
        </h1>
        <a class="center f6 link dim ph3 pv2 mb2 black bg-light-gray pointer br2" target="_blank">
        <svg class="h1" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 20 20" xml:space="preserve">
<path id="print-solid" fill="#A41C1F" d="M17.5,7.5V3c0-0.3-0.1-0.6-0.4-0.9l-1.8-1.8C15.1,0.1,14.8,0,14.5,0H3.8
    C3.1,0,2.5,0.6,2.5,1.2v6.2C1.1,7.5,0,8.6,0,10v4.4C0,14.7,0.3,15,0.6,15h1.9v3.8c0,0.7,0.6,1.2,1.2,1.2h12.5c0.7,0,1.2-0.6,1.2-1.2
    V15h1.9c0.3,0,0.6-0.3,0.6-0.6V10C20,8.6,18.9,7.5,17.5,7.5z M15,17.5H5v-3.8h10V17.5z M15,8.8H5V2.5h7.5v1.9c0,0.3,0.3,0.6,0.6,0.6
    H15V8.8z M16.9,11.6c-0.5,0-0.9-0.4-0.9-0.9c0-0.5,0.4-0.9,0.9-0.9s0.9,0.4,0.9,0.9c0,0,0,0,0,0C17.8,11.1,17.4,11.6,16.9,11.6z"></path>
</svg>
Print All Team Charts
</a>
    </div>
`,
}