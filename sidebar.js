function renderSidebarAndControls(activePage) {
  const sidebarHTML = `
  <div class="sidebar">
    <h2>TeenagersITAcards</h2>
    <a href="index.html" ${activePage === 'home' ? 'class="active"' : ''}>Home</a>
    <a href="annunci.html" ${activePage === 'annunci' ? 'class="active"' : ''}>Annunci</a>
    <a href="carte.html" ${activePage === 'carte' ? 'class="active"' : ''}>Carte</a>
    <a href="gioca.html" ${activePage === 'gioca' ? 'class="active"' : ''}>Gioca vs Bot</a>
    <a href="account.html" ${activePage === 'account' ? 'class="active"' : ''}>Account <span class="badge-review">in fase di revisione</span></a>
  </div>`;

  const controlsHTML = `
  <div class="top-controls">
    <button id="viewToggle" class="control-btn">Vista: PC</button>
    <div style="position: relative;">
      <button id="settingsBtn" class="control-btn">⚙ Impostazioni</button>
      <div id="settingsMenu" class="settings-dropdown">
        <div class="dropdown-section-title">Colore Sfondo</div>
        <div class="dropdown-group">
          <button class="dropdown-item" onclick="setColor('color-blue')">🔵 Blu Aero</button>
          <button class="dropdown-item" onclick="setColor('color-yellow')">🟡 Giallo</button>
          <button class="dropdown-item" onclick="setColor('color-red')">🔴 Rosso</button>
          <button class="dropdown-item" onclick="setColor('color-green')">🟢 Verde</button>
          <button class="dropdown-item" onclick="setColor('color-gray')">⚪ Grigio</button>
