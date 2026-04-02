const numberOfSquares = 256;

const container = document.createElement('div');
container.classList.add('container');
document.body.append(container);

function sketchSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    container.append(square);
};

function numberSquare() {
    for (let i = 0; i < numberOfSquares; i++) {
        sketchSquare();
    };
};

numberSquare();


