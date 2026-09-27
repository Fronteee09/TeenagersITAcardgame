document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
        <h2>TeenagersITAcards</h2>
        <a href="index.html" class="nav-home">Home</a>
        <a href="annunci.html" class="nav-annunci">Annunci</a>
        <a href="carte.html" class="nav-carte">Carte</a>
        <a href="gioca.html" class="nav-gioca">Gioca vs Bot</a>
        <a href="account.html" class="nav-account">Account</a>
    `;
    
    // Inserisce la sidebar nel contenitore dedicato
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHTML;
        
        // Evidenzia automaticamente la pagina corrente in base al nome del file
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const activeLink = sidebarContainer.querySelector(`a[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
