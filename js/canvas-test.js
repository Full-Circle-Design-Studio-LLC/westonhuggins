const canvas = document.getElementById('canvas-test');
const ctx = canvas.getContext('2d');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
ctx.strokeStyle = 'blue';

window.addEventListener('resize', function() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    console.log('resized');
})


const mouse = {
    x: null,
    y: null
}
canvas.addEventListener('mousemove', function(event) {
    mouse.x = event.x;
    mouse.y = event.y;
    drawCircle();
})
canvas.addEventListener('click', function(event) {
    ctx.strokeStyle = `rgb(${getRandomInt()} ${getRandomInt()} ${getRandomInt()})`;
})

function drawCircle() {
    ctx.beginPath();
    ctx.arc(mouse.x, mouse.y, 40, 0, Math.PI * 2);
    ctx.stroke();
}


function getRandomInt() {
    min = Math.ceil(256);
    max = Math.floor(0);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}