const numberOfSquares = 256;

const container = document.createElement('div');
container.classList.add('container');
container.style = `
    display: flex;
    flex-wrap: wrap;
    width: 672px;
`;
/*
  16 squares per row
  Each square takes up 42px total:
  40px (width) + 2px margin (1px on each side)
  So: 16 × 42 = 672px
*/
document.body.append(container);

function hoverSquare(square) {
    square.addEventListener("mouseenter", () => {
    square.style.backgroundColor = "Tomato";
    });
};

function sketchSquare() {
    const square = document.createElement('div');
    square.classList.add('square');
    square.style =`
    width: 40px;
    height: 40px;
    background-color: DodgerBlue;
    border-radius: 10px;
    margin: 1px;
    cursor: pointer;
    `;
    container.append(square);

    hoverSquare(square);
};

function numberSquare() {
    for (let i = 0; i < numberOfSquares; i++) {
        sketchSquare();
    };
};

numberSquare();
