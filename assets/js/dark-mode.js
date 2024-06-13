document.addEventListener('DOMContentLoaded', () => {
    const toggleButton = document.getElementById('toggle-dark-mode');
    const modeIcon = document.getElementById('mode-icon');

    // Fonction pour définir le mode
    const setMode = (mode) => {
        if (mode === 'dark') {
            document.documentElement.classList.add('dark');
            modeIcon.src = './assets/images/icon/moon.svg';
            modeIcon.classList.remove('animate-spin');
        } else {
            document.documentElement.classList.remove('dark');
            modeIcon.src = './assets/images/icon/sun.svg';
            modeIcon.classList.add('animate-spin');
        }
    };

    // Vérifier le Local Storage pour le mode préféré
    const preferredMode = localStorage.getItem('preferredMode');
    if (preferredMode) {
        setMode(preferredMode);
    } else {
        setMode('light');  // Défaut en mode clair
    }

    // Écouteur d'événement pour le changement de mode
    toggleButton.addEventListener('click', (event) => {
        event.preventDefault();

        const currentMode = document.documentElement.classList.contains('dark') ? 'dark' : 'light';
        const newMode = currentMode === 'dark' ? 'light' : 'dark';
        
        setMode(newMode);
        localStorage.setItem('preferredMode', newMode);  // Enregistrer le mode préféré
    });
});
