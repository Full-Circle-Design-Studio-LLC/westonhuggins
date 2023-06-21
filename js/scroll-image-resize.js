let windowHeightVH = window.innerHeight/100;
let vh = window.scrollY/windowHeightVH;
let windowWidth = window.innerWidth;
const img = document.querySelector('.main-img');
let imgWidthPercent = (img.offsetWidth/windowWidth)*100;
const imgMinWidth = 300;

function scrollActions() {
    if ( vh - window.scrollY/windowHeightVH > 0.5 || window.scrollY/windowHeightVH - vh > 0.5 ) {
        vh = window.scrollY/windowHeightVH;
        imgWidthPercent = (img.offsetWidth/windowWidth)*100;
    
        if ( img.offsetWidth <= windowWidth) {
            img.style.width = vh+'%';
        }
        if ( img.offsetWidth >= windowWidth && vh < 100 ) {
            img.style.width = vh+'%';
        }
    }
}

function resizeReset() {
    windowHeightVH = window.innerhHeight/100;
    windowWidth = window.innerWidth;
}

document.addEventListener('scroll', scrollActions);
document.addEventListener('resize', resizeReset);