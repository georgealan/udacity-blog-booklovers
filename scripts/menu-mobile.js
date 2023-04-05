/* Menu Mobile */
const toggleMenu = document.getElementById('toggle-menu');
const menuMobile = document.querySelector('.menu-mobile');
const linkMobile = document.querySelectorAll('.link-menu-mobile');

/* Control Menu Mobile */
toggleMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('show-menu');
    
    if(menuMobile.className === 'menu-mobile show-menu') {
        toggleMenu.src = "../assets/icons/x.svg";
    } else {
        toggleMenu.src = "../assets/icons/hamburger.svg";
    }
})

linkMobile.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('show-menu');
    })
});