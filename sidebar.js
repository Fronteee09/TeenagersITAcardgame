document.addEventListener("DOMContentLoaded", () => {
  const sidebarContainer = document.getElementById("sidebar-container");
  if (!sidebarContainer) return;

  // Rileva il nome della pagina attuale (es. "index.html", "carte.html", ecc.)
  const path = window.location.pathname;
  const page = path.split("/").pop() || "index.html";

  // HTML centralizzato della sidebar con i controlli dinamici
  sidebarContainer.innerHTML = `
    <h2>TeenagersITAcards</h2>
    <a href="index.html" class="${page === 'index.html' ? 'active' : ''}">Home</a>
    <a href="annunci.html" class="${page === 'annunci.html' ? 'active' : ''}">Annunci</a>
    <a href="carte.html" class="${page === 'carte.html' ? 'active' : ''}">Carte</a>
    <a href="gioca.html" class="${page === 'gioca.html' ? 'active' : ''}">Gioca vs Bot</a>
    <a href="account.html" class="${page === 'account.html' ? 'active' : ''}">
      Account <span class="badge-review">(In revisione)</span>
    </a>
  `;
});
