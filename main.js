import { Ship, Player } from './battleship.js';
import { Gameboard } from './gameboard.js';
import { initializeGame } from './initializeGame.js';
import { spawnShip } from './spawnShip.js';

const player1 = Player();
const player2 = Player();
const board1 = Gameboard();
const board2 = Gameboard();

const checkifEmptyStock = (stockArray) => {
    console.log(`array length: ${stockArray.length}`);
    return (stockArray.length == 0) ? true : false;
};

//Page setup
initializeGame();
const computerStock = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
// const computerStock = ['carrier'];
// spawnComputerShips(board2, computerStock);
//While all ships haven't been spawned.. While loop
const formSubmitBtn = document.querySelector('#form-submit');
// const shipStock = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
const shipStock = ['carrier'];
let stockEmpty = false;
formSubmitBtn.addEventListener('click', () => {
    spawnShip(board1, shipStock);
    console.log(board1.boardInfo.occupiedCoords);
    console.log(shipStock);
    stockEmpty = checkifEmptyStock(shipStock);
    if (stockEmpty) {
        //change text to 'player 1 turn', add board click functionality for attacking other player. basically start game.
        const gameInfoText = document.querySelector('.game-info');
        gameInfoText.textContent = 'Player 1 turn';
        console.log('STOCK EMPTY');
        // console.log(computerStock);
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
    //forEach tile, addeventlistener onclick toggleCurrentPlayer()
    //while (!allShipsSunk)
        //if (current player == player1)
            //disable player 1 board
            //attackMethod()
            //markTile() (render method)
        //if (current player == player2)
            //cpu attack method
            //markTile() (render method)
