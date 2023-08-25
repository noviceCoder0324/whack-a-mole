let currMoleTile;


window.onload = () => {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++) {
        //create a <div id="0-8"></div> in tile
        let tile = document.createElement("div");
        tile.id = i.toString();
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "/pic/monty-mole.png";

    let num = getRandomTile();
    console.log(num);
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}