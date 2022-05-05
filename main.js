import { Ship, Gameboard, renderGameboard, addTileCoords, Player } from './battleship.js';

const player1 = Player();
const player2 = Player();
const board1 = Gameboard();
const board2 = Gameboard();

const boards = document.querySelectorAll('.board');
boards.forEach(board => renderGameboard(board));
const boardTiles1 = document.querySelectorAll('.boards-container > div:nth-child(1) > div');
const boardTiles2 = document.querySelectorAll('.boards-container > div:nth-child(2) > div');
console.log(boardTiles1);
console.log(boardTiles2);
addTileCoords(boardTiles1);
addTileCoords(boardTiles2);

//Enter player names, there's a dynamic divs
//Place ships by typing coordinates. Add placeship event listeners during this phase.. probably good to put in some Game object, main/Game/battkeship?
//Start game
//Take turns attacking. Remove current event listeners and add attack event listeners this phase.
//Reset button appears when game ends
