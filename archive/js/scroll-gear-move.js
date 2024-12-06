let windowHeight = window.innerHeight;
let heightFactor = windowHeight/350;
let heightFactorHundred = windowHeight/100;
let rotateFactor = windowHeight/720;
let widthFactor = heightFactor/window.innerWidth;
let scrollY = window.scrollY;
const gear = document.querySelector('.gear');
const parallaxItems = document.querySelectorAll('.floating-item');


function scrollActions() {
    scrollY = window.scrollY;
    if ( scrollY >= windowHeight && scrollY <= windowHeight*2 ) {
        translateValue = (scrollY-windowHeight)*heightFactor;
        rotateValue = (scrollY-windowHeight)*rotateFactor;
        gear.style.transform = 'translateX(' + translateValue + 'px) rotate(' + rotateValue + 'deg)';
    } else if ( scrollY < windowHeight ) {
        gear.style.transform = 'translateX(0) rotate(0)';
    } else if ( scrollY > windowHeight ) {
        gear.style.transform = 'translateX(' + window.innerWidth+100 + 'px) rotate(0)';
    }

    // parallaxMove();
}

function parallaxMove() {
    for (let i = 0; i < parallaxItems.length; i++) {
        parallaxItems[i].style.top = scrollY*heightFactorHundred + 'px';
    }
}

document.addEventListener('scroll', scrollActions);