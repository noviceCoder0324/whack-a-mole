let currMoleTile;
let currPlantTile;
let score = 0;
let gameOver = false;


window.onload = () => {
    setGame();
}

function setGame() {
    //set up the grid for the game board in html
    for (let i = 0; i < 9; i++) {
        //create a <div id="0-8"></div> in tile
        let tile = document.createElement("div");
        tile.id = i.toString();
        tile.addEventListener("click", selectTile)
        document.getElementById("board").appendChild(tile);
    }

    setInterval(setMole, 1000);
    setInterval(setPlant, 2000);
}

function getRandomTile() {
    let num = Math.floor(Math.random() * 9);
    return num.toString();
}

function setMole() {
    if (gameOver) {
        return;
    }

    if (currMoleTile) {
        currMoleTile.innerHTML = "";
    }

    let mole = document.createElement("img");
    mole.src = "/pic/monty-mole.png";

    let num = getRandomTile();
    if (currPlantTile && currPlantTile.id === num) {
        return;
    }
    currMoleTile = document.getElementById(num);
    currMoleTile.appendChild(mole);
}

function setPlant() {
    if (gameOver) {
        return;
    }

    if (currPlantTile) {
        currPlantTile.innerHTML = "";
    }

    let plant = document.createElement("img");
    plant.src = "/pic/piranha-plant.png";

    let num = getRandomTile();
    if (currMoleTile && currMoleTile.id === num) {
        return;
    }
    currPlantTile = document.getElementById(num);
    currPlantTile.appendChild(plant);
}

function selectTile() {

    if (gameOver) {
        return;
    }
    
    // this, refers to the thing you clicked from the listener.
    if (this === currMoleTile) {
        score += 10;
        document.getElementById("score").innerText = score.toString();
    }
    else if (this === currPlantTile) {
        document.getElementById("score").innerText = "Game Over: " + score.toString();
        gameOver = true;
    }
}