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
gridButton.innerHTML = "<span class=\"button_top\">Create Grid</span>"

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
resetButton.innerHTML = "<span class=\"button_top\">Reset</span>"

resetButton.addEventListener("click", function() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(function(square) {
        changeWhite(square);
    });
});

//
const eraseButton = document.createElement("button");
eraseButton.innerHTML = "<span class=\"button_top\">Erase</span>";
eraseButton.addEventListener("click", function() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(function(square) {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "white";
        })
    });
});

const paintButton = document.createElement("button");
paintButton.innerHTML = "<span class=\"button_top\">Draw</span>";
paintButton.addEventListener("click", function() {
    const squares = document.querySelectorAll(".grid-square");
    squares.forEach(function(square) {
        square.addEventListener("mouseover", function() {
            square.style.backgroundColor = "black";
        })
    });
});

//


const buttonDiv = document.createElement("div");
buttonDiv.classList.add("button-div");
document.querySelector("body").appendChild(buttonDiv);
buttonDiv.appendChild(gridButton);
buttonDiv.appendChild(resetButton);
buttonDiv.appendChild(eraseButton);
buttonDiv.append(paintButton);


document.body.insertBefore(buttonDiv, gridContainer);

    