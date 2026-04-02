const numberOfSquares = 256;

const container = document.createElement('div');
container.classList.add('container');
container.style = `
    display: flex;
    flex-wrap: wrap;
    width: 800px;
`
document.body.append(container);

function sketchSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style =`
    width: 50px;
    height: 50px;
    background-color: DodgerBlue;
    border-radius: 10px;
    `;
    container.append(square);
};

function numberSquare() {
    for (let i = 0; i < numberOfSquares; i++) {
        sketchSquare();
    };
};

numberSquare();


