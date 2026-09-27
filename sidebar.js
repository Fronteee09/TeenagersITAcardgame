document.addEventListener("DOMContentLoaded", function() {
    const sidebarHTML = `
        <h2>TeenagersITAcards</h2>
        <a href="index.html">Home</a>
        <a href="annunci.html">Annunci</a>
        <a href="carte.html">Carte</a>
        <a href="gioca.html">Gioca vs Bot</a>
        <a href="account.html">Account <span style="color: #ff3333; font-size: 12px; font-weight: 600; text-shadow: 0 0 8px rgba(255,51,51,0.6); margin-left: 6px;">in fase di revisione</span></a>
    `;
    
    const sidebarContainer = document.getElementById('sidebar-container');
    if (sidebarContainer) {
        sidebarContainer.innerHTML = sidebarHTML;
        
        // Evidenzia automaticamente la pagina corrente
        const currentPage = window.location.pathname.split("/").pop() || "index.html";
        const activeLink = sidebarContainer.querySelector(`a[href="${currentPage}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }
});
