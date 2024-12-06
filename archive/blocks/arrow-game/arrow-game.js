const keyBlock = document.querySelector('.key-block');
const screen = document.querySelector('.ag-screen');
const screenBottom = screen.getBoundingClientRect().bottom;
const catchY = document.querySelector('.catch-box').getBoundingClientRect().y;
const scoreBox = document.querySelector('.ag-score');

const keyTypes = [['ArrowUp','↑'], ['ArrowRight','→'], ['ArrowDown','↓'], ['ArrowLeft','←']];

let score = 0;

const currentKey = keyTypes[getRandomInt(0,3)];
console.log(currentKey);

keyBlock.style.top = '20px';
keyBlock.setAttribute('data-key', currentKey[0]);
keyBlock.innerText = currentKey[1];

setInterval(() => {
    keyBlock.style.top = keyBlock.getBoundingClientRect().y + 5 + 'px';
    if (keyBlock.getBoundingClientRect().bottom >= screenBottom) {
        keyBlock.remove();
    }
}, 30);

document.addEventListener('keydown', function(e) {
    const keyY = keyBlock.getBoundingClientRect().y;
    if (e.code == keyBlock.getAttribute('data-key') && keyY >= catchY - 25 && keyY <= catchY + 100) {
        hit();
    } else {
        miss();
    }
})

function hit() {
    score++;
    scoreBox.innerText = score;
    screen.style.background = '#2dff2d30';
    setTimeout(() => {
        screen.style.background = 'unset';
    }, 75);
    keyBlock.remove();
}
function miss() {
    score--;
    scoreBox.innerText = score;
    screen.style.background = '#ff000033';
    setTimeout(() => {
        screen.style.background = 'unset';        
    }, 75);
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}