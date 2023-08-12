const gridContainer = document.getElementById("grid-container");
let defaultSize = 16;

function createGrid(size) {
    clearGrid(); // Clear the grid before creating a new one
    defaultSize = size;
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(square);
    }
    setupGrid(size);
}

function setupGrid(size) {
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`
    gridContainer.style.gridTemplateRows = `repeat(${size}, 1fr)`
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}

function changeWhite(e) {
    e.style.backgroundColor = "white";
}

const gridButton = document.createElement("button");
gridButton.textContent = "New Grid";
document.body.insertBefore(gridButton, gridContainer);

gridButton.addEventListener("click", () => {
    let newSize = prompt("Enter the number of squares per side (max 100): ");

    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid whole number between 1 and 100");
    }
});
function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContainer.firstChild);
    }
}


const resetButton = document.createElement("button");
resetButton.textContent = "Reset";
document.body.insertBefore(resetButton, gridContainer);
resetButton.addEventListener("click", function() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(function(square) {
        changeWhite(square);
    });
});

    