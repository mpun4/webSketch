let grid = document.querySelector(".grid");
let pad = document.querySelector("button");

newPad(16);

pad.addEventListener("click", () => {
    let square = window.prompt("How many squares per row?", "16");
    while (square == null || square <= 0 || square >= 100 || !Number.isInteger(Number(square)))
    {
        if (square >= 100)
            alert("Too many squares");
        else
            alert("Not a valid number");
        square = window.prompt("How many squares per row?", "16");
    }
    newPad(square);
});

function newPad(square) {
    let oldGrid = Array.from(document.querySelectorAll(".square"));
    oldGrid.forEach((x) => grid.removeChild(x));
    let squareSize = (960/(square)-2)/2;
    for (let i = 0; i < square; i++)
    {
        for (let j = 0; j < square; j++)
        {
            let newSquare = document.createElement("div");
            newSquare.setAttribute("class", "square");
            newSquare.style.padding = `${squareSize}px`;
            newSquare.addEventListener("mouseover", () => {
            newSquare.style.backgroundColor = "#9bbceb";
            });
            grid.appendChild(newSquare);
        }
    }
}