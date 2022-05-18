import { Player, isInArray } from './battleship.js';
import { Gameboard } from './gameboard.js';
import { initializeGame } from './initializeGame.js';
import { spawnShip, spawnComputerShips, getRandomInt } from './spawnShip.js';

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

const markHitOrMiss = (tile, hitOrMiss) => {
    if (hitOrMiss == 'hit') {
        tile.classList.add('hit');
    } else if (hitOrMiss == 'miss') {
        tile.classList.add('miss');
    };
}

const markPlayer2Grid = (tile) => {
    const x = tile.x;
    const y = tile.y;
    const hitOrMiss = board2.receiveAttack(x, y);
    markHitOrMiss(tile, hitOrMiss);
};

const markPlayer1Grid = () => {
    const player1BoardTiles = document.querySelectorAll('.player1-board > div');
    const player1BoardTilesArray = Array.from(player1BoardTiles);
    let randomInt = getRandomInt(1,100);
    let intInArray = isInArray(computerTargets, randomInt);
    if (intInArray) {
        while (intInArray) {
            randomInt = getRandomInt(1,100);
            intInArray = isInArray(computerTargets, randomInt);
        };
    };
    computerTargets.push(randomInt);
    const target = player1BoardTilesArray[randomInt];
    const x = target.x;
    const y = target.y;
    const hitOrMiss = board1.receiveAttack(x,y);
    markHitOrMiss(target, hitOrMiss);
    const isAllSunk = board1.determineAllSunk();
    if (isAllSunk) {
        const gameInfoText = document.querySelector('.game-info');
        gameInfoText.textContent = 'Computer wins!';
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
const computerTargets = [];
spawnComputerShips(board2, computerStock);
//Player setup
const formSubmitBtn = document.querySelector('#form-submit');
const shipStock = ['carrier', 'battleship', 'cruiser', 'submarine', 'destroyer'];
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
        //Add board click functionality for attacking other player.
        const boardTiles2 = document.querySelectorAll('.player2-board > div');
        boardTiles2.forEach(tile => {
            tile.classList.add('active')
            tile.addEventListener('click', () => {
                markPlayer2Grid(tile);
                markPlayer1Grid();
                const isAllSunk = board2.determineAllSunk();
                if (isAllSunk) {
                    gameInfoText.textContent = 'Player 1 wins!';
                };
            });
        });
    };
});