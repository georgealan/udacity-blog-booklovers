/* Menu Mobile */
const toggleMenu = document.getElementById('toggle-menu');
const menuMobile = document.querySelector('.menu-mobile');
const linkMobile = document.querySelectorAll('.link-menu-mobile');
let btnScrollToTop = document.getElementById('btn-scroll-top');

/* Control Menu Mobile */
toggleMenu.addEventListener('click', () => {
    menuMobile.classList.toggle('show-menu');
    
    if(menuMobile.className === 'menu-mobile show-menu') {
        toggleMenu.src = "assets/icons/x.svg";
    } else {
        toggleMenu.src = "assets/icons/hamburger.svg";
    }
})

linkMobile.forEach(link => {
    link.addEventListener('click', () => {
        menuMobile.classList.remove('show-menu');
    })
});

/* Control Button Scroll to Top */
window.addEventListener('scroll', () => {
    if(document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
        btnScrollToTop.style.display = 'block';
    } else {
        btnScrollToTop.style.display = 'none';
    }
})

btnScrollToTop.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
})