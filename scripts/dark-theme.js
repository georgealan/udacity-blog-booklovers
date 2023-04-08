let darkMode = localStorage.getItem('darkMode');

const logoImage = document.getElementById('logo-complete');
const toggleMenuVerify = document.getElementById('toggle-menu');
const toggleMenuMobile = document.getElementById('toggle-menu');
const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeMobile = document.getElementById('toggle-theme-mobile');

const enableDarkMode = () => {
    document.body.classList.add('dark-theme');
    localStorage.setItem('darkMode', 'enabled');
    toggleTheme.src = "assets/icons/sun.svg";
    toggleThemeMobile.src = "assets/icons/sun.svg";
    logoImage.srcset = "assets/images/logo-complete-white.png";

    if(window.localStorage.getItem('menuMobileState') === 'open') {
        toggleMenuVerify.src = "assets/icons/x-white.svg";
    } else {
        toggleMenuVerify.src = "assets/icons/hamburger-white.svg";
    }
}

const disableDarkMode = () => {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('darkMode', null);
    toggleTheme.src = "assets/icons/moon-fill.svg";
    toggleThemeMobile.src = "assets/icons/moon-fill.svg";
    logoImage.srcset = "assets/images/logo-complete-black.png";

    if(window.localStorage.getItem('menuMobileState') === 'open') {
        toggleMenuVerify.src = "assets/icons/x.svg";
    } else {
        toggleMenuVerify.src = "assets/icons/hamburger.svg";
    }
}

if(darkMode === 'enabled') {
    enableDarkMode();
}

toggleTheme.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})

toggleThemeMobile.addEventListener('click', () => {
    darkMode = localStorage.getItem('darkMode');

    if(darkMode !== 'enabled') {
        enableDarkMode();
    } else {
        disableDarkMode();
    }
})
