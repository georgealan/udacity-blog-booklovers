const toggleTheme = document.getElementById('toggle-theme');
const toggleThemeMobile = document.getElementById('toggle-theme-mobile');

toggleTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        toggleTheme.src = "assets/icons/sun.svg";
    } else {
        toggleTheme.src = "assets/icons/moon-fill.svg";
    }
})

toggleThemeMobile.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if(document.body.classList.contains('dark-theme')) {
        toggleThemeMobile.src = "assets/icons/sun.svg";
    } else {
        toggleThemeMobile.src = "assets/icons/moon-fill.svg";
    }
})
