import { Gameboard, addTileCoords } from './gameboard.js';
import { renderGameboard } from './render.js';

const addPageBtnEvents = () => {
    const spawnShipBtn = document.querySelector('button');
    const popupForm = document.querySelector('.popup-form-container');
    const closeFormBtn = document.querySelector('.form-close');
    spawnShipBtn.addEventListener('click', () => popupForm.style.display = 'grid');
    closeFormBtn.addEventListener('click', () => popupForm.style.display = 'none');
};

const prepareBoards = () => {
    const boards = document.querySelectorAll('.board');
    boards.forEach(board => renderGameboard(board));
    const boardTiles1 = document.querySelectorAll('.boards-container > div:nth-child(1) > div');
    const boardTiles2 = document.querySelectorAll('.boards-container > div:nth-child(2) > div');
    addTileCoords(boardTiles1);
    addTileCoords(boardTiles2);
};

const initializeGame = () => {
    addPageBtnEvents();
    prepareBoards();
};

export { initializeGame };
