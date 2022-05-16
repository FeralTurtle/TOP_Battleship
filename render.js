import { Gameboard } from "./gameboard.js";

const renderGameboard = (board) => {
    const { boardInfo } = Gameboard();
    const gridSize = boardInfo.gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newTile = document.createElement('div');
        board.append(newTile);
    };
};

const renderShips = () => {
    //forEach tile on gameboard, if element matches an occupiedCoords, add the .ship class to the tile element
};

export { renderGameboard };
