document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher');
    const flag = document.getElementById('flag');

    // Fonction pour définir la langue
    const setLanguage = (lang) => {
        const frElements = document.querySelectorAll('.lang-fr');
        const enElements = document.querySelectorAll('.lang-en');

        if (lang === 'fr') {
            frElements.forEach(element => {
                element.classList.remove('hidden');
            });
            enElements.forEach(element => {
                element.classList.add('hidden');
            });
            flag.textContent = '🇫🇷';
        } else {
            frElements.forEach(element => {
                element.classList.add('hidden');
            });
            enElements.forEach(element => {
                element.classList.remove('hidden');
            });
            flag.textContent = '🇺🇸';
        }
    };

    // Vérifier le Local Storage pour la langue préférée
    const preferredLang = localStorage.getItem('preferredLang');
    if (preferredLang) {
        setLanguage(preferredLang);
    } else {
        setLanguage('fr');  // Défaut en français
    }

    // Écouteur d'événement pour le changement de langue
    langSwitcher.addEventListener('click', (event) => {
        event.preventDefault();

        const currentLang = flag.textContent === '🇫🇷' ? 'fr' : 'en';
        const newLang = currentLang === 'fr' ? 'en' : 'fr';
        
        setLanguage(newLang);
        localStorage.setItem('preferredLang', newLang);  // Enregistrer la langue préférée
    });
});
