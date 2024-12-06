const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const generateButton = document.getElementById('button-generate');
generateButton.addEventListener('click', startGenerating);

function startGenerating() {
    if ( generateButton.getAttribute('state') == 'off' ) {
        generateInterval = setInterval(generateShape, 100);
        generateButton.setAttribute('state', 'on');
    } else {
        clearInterval(generateInterval);
        generateButton.setAttribute('state', 'off');
    }
}

function generateShape() {
    ctx.strokeStyle = "red";
    ctx.lineWidth = 3;
    let startX = getRandomArbitrary(-50, canvas.width);
    let startY = getRandomArbitrary(-50, canvas.height);
    let length = getRandomArbitrary(10, 100);
    ctx.strokeRect(startX, startY, length, length);


    // ctx.beginPath();
    // ctx.moveTo(20, 20);
    // ctx.lineTo(55, 20);
    // ctx.lineTo(55, 55);
    // ctx.lineTo(20, 55);
    // ctx.lineTo(20, 20);
    // ctx.stroke();
    // ctx.strokeRect(20, 40, 50, 50);
    // ctx.fill();
    // ctx.closePath();
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}