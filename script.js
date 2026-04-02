const numberOfSquares = 256;

function sketchSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    document.body.append(square);
};

function numberSquare() {
    for (let i = 0; i < numberOfSquares; i++) {
        sketchSquare();
    };
};

numberSquare();


