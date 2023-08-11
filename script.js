const gridContainer = document.getElementById("grid-container");
const defaultSize = 16;

function createGrid(size) {
    
    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");
        square.classList.add("grid-square");
        square.addEventListener("mouseover", changeColor);
        gridContainer.appendChild(square);
        document.querySelector(".grid-square").style.width = "calc(960px / size)";
        document.querySelector(".grid-square").style.height = "calc(960px / size)";
    }
}

function changeColor(e) {
    e.target.style.backgroundColor = "black";
}


const resetButton = document.createElement("button");
resetButton.textContent = "New Grid";
document.body.insertBefore(resetButton, gridContainer);

resetButton.addEventListener("click", () => {
    const newSize = prompt("Enter the number of squares per side(max 100): ");
    if (newSize > 0 && newSize <= 100) {
        createGrid(newSize);
    } else {
        alert("Please enter a valid number between 1 and 100");
        createGrid(defaultSize);

    }

});

function clearGrid() {
    while (gridContainer.firstChild) {
        gridContainer.removeChild(gridContanier.firstChild);
    }
}