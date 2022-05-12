import { Ship, Player } from './battleship.js';
import { Gameboard, addTileCoords } from './gameboard.js';
import { renderGameboard } from './render.js';

const player1 = Player();
const player2 = Player();
const board1 = Gameboard();
const board2 = Gameboard();

//Render boards / initializeGame() from battleship.js
const boards = document.querySelectorAll('.board');
boards.forEach(board => renderGameboard(board));
const boardTiles1 = document.querySelectorAll('.boards-container > div:nth-child(1) > div');
const boardTiles2 = document.querySelectorAll('.boards-container > div:nth-child(2) > div');
// console.log(boardTiles1);
// console.log(boardTiles2);
addTileCoords(boardTiles1);
addTileCoords(boardTiles2);
//Spawn ships
const spawnShipBtn = document.querySelector('button');
//Form
const popupForm = document.querySelector('.popup-form-container');
const closeFormBtn = document.querySelector('.form-close');
spawnShipBtn.addEventListener('click', () => popupForm.style.display = 'grid');
closeFormBtn.addEventListener('click', () => popupForm.style.display = 'none');
const shipName = document.querySelector('#ship-name');
const xCoord = document.querySelector('#x-coordinates');
const yCoord = document.querySelector('#y-coordinates');
const direction = document.querySelector('#direction');

const formSubmitBtn = document.querySelector('#form-submit');
formSubmitBtn.addEventListener('click', () => {
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
