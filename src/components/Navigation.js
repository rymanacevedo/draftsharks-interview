export default {
  template: `
  <header id="ds-header">
  <div class="container">
    <div class="head-main">
      <!-- Logo -->
      <div class="logo">
        <a href="#" aria-label="DraftSharks Home">
          <img src="/img/logo-notag.svg" alt="DraftSharks" width="360" height="159">
        </a>
      </div>

      <!-- Mobile Menu Toggle -->
      <button id="mobile-menu-trigger" class="nav-trigger nav-open" aria-expanded="false" aria-controls="mobile-dropdown">
        Open Navigation
      </button>

      <!-- Main Navigation -->
      <nav aria-label="Main Navigation">
        <ul>
        <ul>
          <li><a href="/fantasy-football-news">News</a></li>
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
          <img src="/img/icons/search.svg" alt="Search" width="25" height="25">
        </a>
        <a href="/login" class="outline-btn btn"><strong>Login</strong></a>
        <a href="/subscribe" class="white-btn btn"><strong>Sign Up</strong></a>
        <button class="hide-nav-menu" aria-label="Hide Navigation Menu">
          <img src="/img/icons/hide-nav.svg" alt="" width="25" height="25"><br>Hide Menu
        </button>
      </div>
    </div>
  </div>

  <!-- Dropdown Menus -->
  <div class="dropdown-menu drop-hidden" aria-live="polite">
    <div class="container">
      <div class="menu-container">
        <!-- Example Dropdown Content (Rankings) -->
        <div id="rankings-drop-content" class="drop-content rankings-drop-content has-video" aria-hidden="true">
          <h2 class="dropdown-header">Rankings</h2>
          <div class="menu-video">
            <!-- Video content with accessible links and descriptions -->
          </div>
          <div class="link-lists">
            <div class="link-list">
              <h3 class="list-title">Week 8</h3>
              <a href="/weekly-rankings/8">Non-PPR</a>
              <a href="/weekly-rankings/8/half-ppr">Half PPR</a>
              <!-- Additional links here -->
            </div>
            <!-- More dropdown content sections -->
          </div>
        </div>
        <!-- Additional dropdown sections (e.g., advice-drop-content) -->
      </div>
    </div>
  </div>
</header>
    `,
}
