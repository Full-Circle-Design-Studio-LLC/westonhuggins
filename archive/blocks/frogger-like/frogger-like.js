grid = document.querySelector('.frogger-grid');

moveSound = document.getElementById('sound-move');
popSound = document.getElementById('sound-pop');

insect = document.querySelector('.insect');

pointCount = 0;
scoreDiv = document.querySelector('.frogger-score');

function startGame() {
    document.addEventListener("keydown", keyDownHandler, false);
    document.querySelector('.frogger-menu_start').style.display = 'none';
    insectInterval = setInterval(createInsect, 1800);
    setTimeout(() => {
        clearInterval(insectInterval);
        insectInterval = setInterval(createInsect, 1400);
    }, 9000);
    setTimeout(() => {
        clearInterval(insectInterval);
        insectInterval = setInterval(createInsect, 1000);
    }, 17400);
    setTimeout(() => {
        clearInterval(insectInterval);
        insectInterval = setInterval(createInsect, 750);
    }, 25400);
    setTimeout(() => {
        clearInterval(insectInterval);
        insect.remove();
        document.querySelector('.frogger-menu_end').style.display = 'flex';
        document.querySelector('.frogger-final-score').innerHTML = 'Final Score: '+pointCount;
        document.removeEventListener("keydown", keyDownHandler);
    }, 35150);
}

function keyDownHandler(event) {
    if (event.keyCode === 39) {
        // right
        moveFrog('right');

    } else if (event.keyCode === 37) {
        // left
        moveFrog('left');
    }
    if (event.keyCode === 40) {
        // down
        moveFrog('down');
    } else if (event.keyCode === 38) {
        // up
        moveFrog('up');
    }
}

function moveFrog(direction) {

    frog = document.getElementById('frog');
    currentSquare = frog.parentElement;

    if (direction === 'right') {
        if (currentSquare.classList.contains('right-edge')) {
            return;
        }
        targetSquare = currentSquare.nextElementSibling;
    } else if (direction === 'left') {
        if (currentSquare.classList.contains('left-edge')) {
            return;
        }
        targetSquare = currentSquare.previousElementSibling;
    } else if (direction === 'down') {
        currentSquareNumber = parseInt(currentSquare.classList[1].substr(-2));
        if (currentSquareNumber < 21) {
            targetSquareNumber = currentSquareNumber + 4;
            targetSquare = grid.children[targetSquareNumber];
        }
    } else if (direction === 'up') {
        currentSquareNumber = parseInt(currentSquare.classList[1].substr(-2));
        if (currentSquareNumber > 5) {
            targetSquareNumber = currentSquareNumber - 6;
            targetSquare = grid.children[targetSquareNumber];
        }
    }

    if (grid.contains(targetSquare)) {
        //moveSound.play();
        frog.remove();
        targetSquare.appendChild(frog);
        if (targetSquare.contains(insect)) {
            addPoint();
            insect.remove()
        }
    }
}


function createInsect() {
    // every few seconds, fill a random box with a bug
    gridNumber = getRandomNumber(0,24);
    if (!grid.children[gridNumber].contains(frog)) {
        grid.children[gridNumber].appendChild(insect);
    }
}

function getRandomNumber(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function addPoint() {
    pointCount +=1;
    scoreDiv.innerHTML = pointCount;
}