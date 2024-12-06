class Square {
    constructor(rotateX, rotateY, rotateZ, rotateDegree) {
        this.rotateX = rotateX;
        this.rotateY = rotateY;
        this.rotateZ = rotateZ;
        this.rotateDegree = rotateDegree;
    }
}

const form = document.querySelector('.rt-form');
const randomize = document.querySelector('.rt-randomize');

square = document.querySelector('.rt-square');
valueX = document.getElementById('rt-value-1');
valueY = document.getElementById('rt-value-2');
valueZ = document.getElementById('rt-value-3');
degree = document.getElementById('rt-degree');

squareObject = new Square(0,0,0,0);

form.addEventListener('submit', function(e) {
    e.preventDefault();

    rotate(valueX.value, valueY.value, valueZ.value, degree.value);
})

randomize.addEventListener('click', function() {
    const x = Math.round(Math.random() * 10) / 10;
    const y = Math.round(Math.random() * 10) / 10;
    const z = Math.round(Math.random() * 10) / 10;
    const deg = getRandomInt(0,360);

    valueX.value = x;
    valueY.value = y;
    valueZ.value = z;
    degree.value = deg;

    rotate(x, y, z, deg);
});


function rotate(x,y,z,deg) {
    squareObject.rotateX = x;
    squareObject.rotateY = y;
    squareObject.rotateZ = z;
    squareObject.rotateDegree = deg;

    square.style.transform = `rotate3d(${squareObject.rotateX},${squareObject.rotateY},${squareObject.rotateZ},${squareObject.rotateDegree}deg)`;
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}