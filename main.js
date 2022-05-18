import { Player } from './battleship.js';
import { Gameboard } from './gameboard.js';
import { initializeGame } from './initializeGame.js';
import { spawnShip, spawnComputerShips } from './spawnShip.js';

const checkifEmptyStock = (stockArray) => {
    return (stockArray.length == 0) ? true : false;
};

const toggleCurrentPlayer = () => {
    player1Name.classList.toggle('current-player');
    player2Name.classList.toggle('current-player');
    if (currentPlayer == player1) {
        currentPlayer = player2;
    } else if (currentPlayer == player2) {
        currentPlayer = player1;
    };
};

const clearShipStockText = () => {
    const shipSpawnInfo = document.querySelector('.ship-spawn-info');
    while (shipSpawnInfo.firstChild) {
        shipSpawnInfo.firstChild.remove();
    };
};

const player1 = Player();
const player2 = Player();
const board1 = Gameboard();
const board2 = Gameboard();
const player1Name = document.querySelector('.player1-name');
const player2Name = document.querySelector('.player2-name');
const popupForm = document.querySelector('.popup-form-container');

//Page setup
initializeGame();
const computerStock = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
spawnComputerShips(board2, computerStock);

const formSubmitBtn = document.querySelector('#form-submit');
// const shipStock = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
const shipStock = ['carrier'];
let stockEmpty = false;
formSubmitBtn.addEventListener('click', () => {
    spawnShip(board1, shipStock);
    stockEmpty = checkifEmptyStock(shipStock);
    if (stockEmpty) {
        popupForm.style.display = 'none';
        clearShipStockText();
        //Set player 1 as current player
        let currentPlayer = player1;
        const gameInfoText = document.querySelector('.game-info');
        gameInfoText.textContent = 'Player 1 turn';
        player1Name.classList.toggle('current-player');
        //add board click functionality for attacking other player. basically start game.
        const boardTiles2 = document.querySelectorAll('.player2-board > div');
        boardTiles2.forEach(tile => {
            tile.classList.add('active')
            tile.addEventListener('click', () => {
                const x = tile.x;
                const y = tile.y;
                const hitOrMiss = board2.receiveAttack(x, y);
                console.log(`hitOrMiss: ${hitOrMiss}`);
                if (hitOrMiss == 'hit') {
                    tile.classList.add('hit');
                } else if (hitOrMiss == 'miss') {
                    tile.classList.add('miss');
                };
            });
        });
        // boardTiles2.forEach(tile => console.log(tile));
    };
});


//initializeGame()
    //Render boards
    //spawn enemy ships on enemy grid
    //display ships that can be spawned at bottom of page
        //while (!allShipsSpawned)
        //Carrier (5), Battleship (4), Cruiser (3), Submarine (3), Destroyer (2)
        //click place ship button, popup for userinput, ask for ship name/coords/direction (getter method)
        //render the ship with recent info (render method)
//Game()
    //const toggleCurrentPlayer() => { player1&2.classList.toggle('current-player); player1Name.style.backgroundColor = 'rgba(255, 255, 255, 0.65)'}
    //forEach tile, addeventlistener onclick toggleCurrentPlayer(), receiveHit();
    //while (!allShipsSunk)
        //if (current player == player1)
            //disable player 1 board
            //attackMethod()
            //markTile() (render method)
        //if (current player == player2)
            //cpu attack method
            //markTile() (render method)
