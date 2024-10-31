export default {
  data() {
    return {
      menuOpen: false,
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen;
    },
    closeMenu() {
      this.menuOpen = false;
    },
  },
  template: `
    <header class="ds-header">
      <div class="flex center mw7">
        <!-- Logo -->
        <div class="logo">
          <a href="#" aria-label="DraftSharks Home">
            <img class="img" height="80" width="150" src="https://www.draftsharks.com/img/logo-notag.svg" alt="DraftSharks">
          </a>
        </div>
        
        <!-- Mobile Menu Toggle -->
        <button @click="toggleMenu" :class="{ change: menuOpen }" id="mobile-menu-trigger" class="ml-auto bg-transparent b--transparent">
  <div class="dib pointer">  
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
  </div>
  <span v-if="!menuOpen" class="clip">Open Navigation</span>
  <span v-else class="clip">Close Navigation</span>
</button>

      </div>

      <!-- Main Navigation, visible when menuOpen is true -->
      <div v-if="menuOpen" class="menu-content ds-mobile-dropdown">
        <nav class="flex flex-column" aria-label="Main Navigation">
          <ul class="flex flex-column">
            <li class="list mb3">
              <a class="b f4 flex items-center no-underline white search-link" href="#site-search-container" aria-label="Open search">
                <img class="mr2" src="https://www.draftsharks.com/img/icons/search-white.svg" alt="Search" width="25" height="25">
                <span>Search</span>
              </a>
            </li>
            <li class="list mb3"><a class="b f4 white no-underline" href="#">News</a></li>
            <li class="list mb3"><a class="b f4 white dropdown-toggle" aria-expanded="false" aria-controls="advice-drop-content">Advice</a></li>
            <li class="list mb3"><a class="b f4 white dropdown-toggle" aria-expanded="false" aria-controls="rankings-drop-content">Rankings</a></li>
            <li class="list mb3"><a class="b f4 white dropdown-toggle" aria-expanded="false" aria-controls="fantasy-drop-content">Fantasy Football Tools</a></li>
            <li class="list mb3"><a class="b f4 white dropdown-toggle" aria-expanded="false" aria-controls="leagues-drop-content">My Leagues</a></li>
            <li class="list mb3"><a href="#" class="b f5 white outline-btn btn">Login</a></li>
            <li class="list mb3"><a href="#" class="b f5 white white-btn btn">Sign Up</a></li>
          </ul>
        </nav>
      </div>
    </header>
    `,
  styles: `
      /* Hide menu content by default */
      .menu-content {
        display: none;
      }
      /* Show menu content when menu is open */
      .menu-open .menu-content {
        display: block;
      }
    `,
};
