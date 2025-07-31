let grid = document.querySelector(".grid");
let pad = document.querySelector("button");

for (let i = 0; i < 16; i++)
{
    for (let j = 0; j < 16; j++)
    {
        let square = document.createElement("div");
        square.setAttribute("class", "square");
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#9bbceb";
        });
        grid.appendChild(square);
    }
}

function newPad() {
}