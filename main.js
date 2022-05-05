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
//5 ships: Carrier (5), Battleship (4), Cruiser (3), Submarine (3), Destroyer (2)
//Fixed placement assortment of ships at bottom of page. Click to select, drag to grid, release to place. Click rotate button while selected to rotate..
//..Click anywhere other than ship to deselect.
    //Spawn ships. Make a new grid at the bottom of page. Call a render ship factory that calls the Ship factory, placing them at specific positions on the grid.
        //Clicking rotate will switch the x and y values to render the colored ship divs horizontally instead and vice versa.
    //Click to select.. On click, drag to grid and release. Grid coords should be updated to mark the occupied space.
