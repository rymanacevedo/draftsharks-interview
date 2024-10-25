export default {
  template: `
  <header id="ds-header">
    <div class="head-main flex">
        <!-- Logo -->
        <div class="logo">
            <a href="#" aria-label="DraftSharks Home">
                <img src="https://www.draftsharks.com/img/logo-notag.svg" alt="DraftSharks" width="360" height="159">
            </a>
        </div>
        <!-- Mobile Menu Toggle -->
        <button id="mobile-menu-trigger" class="nav-trigger nav-open" aria-expanded="false" aria-controls="mobile-dropdown">
        Open Navigation
        </button>
        <button class="hide-nav-menu" aria-label="Hide Navigation Menu">
        <img src="https://www.draftsharks.com/img/icons/hide-nav.svg" alt="" width="25" height="25"><br>Hide Menu
        </button>
    </div>

    <div class="block"> 
        <!-- Main Navigation -->
        <nav aria-label="Main Navigation">
        <ul>
            <li><a href="#">News</a></li>
            <li class="dropdown">
            <button class="dropdown-toggle" aria-expanded="false" aria-controls="advice-drop-content">Advice</button>
            <div id="advice-drop-content" class="dropdown-content">
                <!-- Advice dropdown content -->
            </div>
            </li>
            <li class="dropdown">
            <button class="dropdown-toggle" aria-expanded="false" aria-controls="rankings-drop-content">Rankings</button>
            <div id="rankings-drop-content" class="dropdown-content">
                <!-- Rankings dropdown content -->
            </div>
            </li>
            <li class="dropdown">
            <button class="dropdown-toggle" aria-expanded="false" aria-controls="fantasy-drop-content">Fantasy Football Tools</button>
            <div id="fantasy-drop-content" class="dropdown-content">
                <!-- Fantasy tools dropdown content -->
            </div>
            </li>
            <li class="dropdown">
            <button class="dropdown-toggle" aria-expanded="false" aria-controls="leagues-drop-content">My Leagues</button>
            <div id="leagues-drop-content" class="dropdown-content">
                <!-- Leagues dropdown content -->
            </div>
            </li>
        </ul>
        </nav>
         <!-- Extra Menu Options -->
        <div class="extra-menu">
            <a href="#site-search-container" class="search-link" aria-label="Open search">
                <img src="https://www.draftsharks.com/img/icons/search-white.svg" alt="Search" width="25" height="25">
            </a>
            <a href="/login" class="outline-btn btn"><strong>Login</strong></a>
            <a href="/subscribe" class="white-btn btn"><strong>Sign Up</strong></a>
        </div>
    </div>
</header>
    `,
  styles: `
    position: relative;
    height: 100px;
    background: #041944;
    width: 100%;
    z-index: 1056;
    `,
}
