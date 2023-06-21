const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const generateButton = document.getElementById('button-generate');

let startX = -50;
let startY = -50;
const length = 100;

function startGenerating() {
    if ( generateButton.getAttribute('state') == 'off' ) {
        generateInterval = setInterval(generateShape, 20);
        generateButton.setAttribute('state', 'on');
    } else {
        clearInterval(generateInterval);
        generateButton.setAttribute('state', 'off');
    }
}

function generateShape() {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 2;
    if ( startY + 10 <= canvas.height + 50 ) {
        startY += 10;
    }
    if ( startX + 10 < canvas.width + 50) {
        startX += 10;
    }
    ctx.strokeRect(startX, startY, length, length);
}

generateButton.addEventListener('click', startGenerating);

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}