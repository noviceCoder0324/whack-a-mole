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
}