let bodyText = document.getElementById('article');
let btnDecrease = document.getElementById('decrease');
let btnReset = document.getElementById('reset');
let btnIncrease = document.getElementById('increase');
const articleSubtitles = document.querySelectorAll('h1, h2');
const navSubtitles = document.querySelectorAll('.text-anchors a');
const textSizeReset = 18;
let textSize = 18;
let lineHeigthReset = 1.6;
let lineHeigth = 1.6;

/* Control Buttons Change Font Size in Post Page */
btnDecrease.addEventListener('click', () => {
    if (textSize === 14){
        return;
    }
    textSize = textSize - 1;
    bodyText.style.fontSize = textSize + 'px';
})

btnReset.addEventListener('click', () => {
    bodyText.style.fontSize = textSizeReset + 'px';
    bodyText.style.lineHeight = lineHeigthReset + 'em';
    textSize = textSizeReset;
    lineHeigth = lineHeigthReset;
})

btnIncrease.addEventListener('click', () => {
    if (textSize === 32){
        return;
    }
    textSize = textSize + 2;
    lineHeigth = lineHeigth + 0.04;
    bodyText.style.fontSize = textSize + 'px';
    bodyText.style.lineHeight = lineHeigth + 'em';
})

/* Control Menu Topics in Post Page */
window.addEventListener('scroll', () => {
    let current = '';
    
    articleSubtitles.forEach(articleSubtitle => {
        const subtitleTop = articleSubtitle.offsetTop;
        const subtitleHeight = articleSubtitle.clientHeight;

        if(scrollY >= (subtitleTop - subtitleHeight / 0.2)) {
            current = articleSubtitle.getAttribute('id');
        }
    })

    navSubtitles.forEach(navLink => {
        navLink.classList.remove('active');

        if(navLink.classList.contains(current)) {
            navLink.classList.add('active');
        }
    })
})
