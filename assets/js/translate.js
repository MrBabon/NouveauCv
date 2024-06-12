document.addEventListener('DOMContentLoaded', () => {
    const langSwitcher = document.getElementById('lang-switcher');
    const flag = document.getElementById('flag');
    
    langSwitcher.addEventListener('click', (event) => {
        event.preventDefault();

        const frElements = document.querySelectorAll('.lang-fr');
        const enElements = document.querySelectorAll('.lang-en');

        // Basculer entre le français et l'anglais
        if (flag.textContent === '🇫🇷') {
            frElements.forEach(element => {
                element.classList.add('hidden');
            });
            enElements.forEach(element => {
                element.classList.remove('hidden');
            });
            flag.textContent = '🇺🇸';
        } else {
            frElements.forEach(element => {
                element.classList.remove('hidden');
            });
            enElements.forEach(element => {
                element.classList.add('hidden');
            });
            flag.textContent = '🇫🇷';
        }
    });
});
