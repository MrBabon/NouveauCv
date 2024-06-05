import { setupDarkMode } from './dark-mode.js';
import { initializeMenu, initializePhoneMenu, initializeDropdownMenu } from './navbar.js';
import { setupScrollTop } from './scroll-top.js';
import { setupLoader } from './loader.js';
// DARK MODE    
document.addEventListener('DOMContentLoaded', setupDarkMode);

// Navbar
document.addEventListener("DOMContentLoaded", function () {
    initializeMenu();
    initializePhoneMenu();
    initializeDropdownMenu();

});
// LOADER PAGE
document.addEventListener('DOMContentLoaded', setupLoader);
// SCROLL TOP
document.addEventListener('DOMContentLoaded', setupScrollTop);