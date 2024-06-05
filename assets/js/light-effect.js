export function setupLightEffect(){
    document.addEventListener('mousemove', (event) => {
        const lightEffect = document.querySelector('.light-effect');
        const x = event.clientX;
        const y = event.clientY;
        const isDarkMode = document.documentElement.classList.contains('dark');
        const color = isDarkMode ? 'rgba(79, 245, 123, 0.15)' : 'rgba(79, 245, 123, 0)';
        lightEffect.style.background = `radial-gradient(600px at ${x}px ${y}px, ${color}, transparent 80%)`;
    });
}

