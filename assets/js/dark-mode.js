export function setupDarkMode(){
    const toggleButton = document.getElementById('toggle-dark-mode');
    const modeIcon = document.getElementById('mode-icon');
    toggleButton.addEventListener('click', (event) => {
        event.preventDefault();
        document.documentElement.classList.toggle('dark');
        if (document.documentElement.classList.contains('dark')) {
            modeIcon.src = './assets/images/icon/moon.svg';
            modeIcon.classList.remove('animate-spin');  
        } else {
            modeIcon.src = './assets/images/icon/sun.svg';
            modeIcon.classList.add('animate-spin');
        }
    })
}