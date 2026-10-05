// assets/js/includes.js

document.addEventListener('DOMContentLoaded', async () => {
    try {
        // Header laden
        const headerResponse = await fetch('assets/html/header.html');
        const headerText = await headerResponse.text();
        const headerContainer = document.querySelector('[data-include="header"]');
        if (headerContainer) {
            headerContainer.innerHTML = headerText;
        }

        // Footer laden
        const footerResponse = await fetch('assets/html/footer.html');
        const footerText = await footerResponse.text();
        const footerContainer = document.querySelector('[data-include="footer"]');
        if (footerContainer) {
            footerContainer.innerHTML = footerText;
        }

        console.log('Header & Footer geladen');
    } catch (error) {
        console.error('Fehler beim Laden von Header/Footer:', error);
    }
});