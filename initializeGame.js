import { Gameboard, addTileCoords } from './gameboard.js';
import { renderGameboard } from './render.js';

const initializeGame = () => {
    //Prepare boards
    const boards = document.querySelectorAll('.board');
    boards.forEach(board => renderGameboard(board));
    const boardTiles1 = document.querySelectorAll('.boards-container > div:nth-child(1) > div');
    const boardTiles2 = document.querySelectorAll('.boards-container > div:nth-child(2) > div');
    addTileCoords(boardTiles1);
    addTileCoords(boardTiles2);

    //Spawn other player's ships
    //Make 5 ships, choosing a random spawn coords each time and attempting again until placed if invalid/occupied coords.
};

export { initializeGame };
