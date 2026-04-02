// /home/dell/Felippe/top/project-etch-a-sketch/script.js
const button = document.createElement("button");
const container = document.createElement('div');

document.body.append(button);
button.textContent = "Choose the Number of Squares"
button.classList.add("button");

function randomRgb() {
    return Math.floor(Math.random() * 256);
};

function hoverSquare(square) {
    square.addEventListener("mouseenter", () => {
    const currentOpacity = parseFloat(getComputedStyle(square).opacity);
    square.style.opacity = (parseFloat(currentOpacity) - 0.1).toFixed(1);
    });
};

function sketchSquare() {
    const square = document.createElement('div');

    container.append(square);
    square.classList.add('square');
    square.style =`background-color: ${`rgb(${randomRgb()}, ${randomRgb()}, ${randomRgb()})`};`;

    hoverSquare(square);
};

function numberSquare(numberOfSquares) {
    for (let i = 0; i < numberOfSquares; i++) {
        for (let j = 0; j < numberOfSquares; j++) {
            sketchSquare();
        }
    };
};

function userNumberOfSquares () {
    container.innerHTML = "";
    let input = 0;
    input = parseInt(prompt("How many squares per side? (max 100)")/2);
    let numberOfSquares = Math.min(input, 50);
    let widthSize = 22 * numberOfSquares + 13;

    container.classList.add('container');
    container.style = `width: ${widthSize}px;`;
    document.body.append(container);
    numberSquare(numberOfSquares);
};

button.addEventListener("click", () => {
    userNumberOfSquares();
});
