import { Gameboard } from "./gameboard.js";

const renderGameboard = (board) => {
    const { boardInfo } = Gameboard();
    const gridSize = boardInfo.gridSize;
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newTile = document.createElement('div');
        board.append(newTile);
    };
};

const renderShips = (board, boardTiles) => {
    const occupiedCoords = board.boardInfo.occupiedCoords;
    //forEach tile on gameboard, if element matches an occupiedCoords, add the .ship class to the tile element
    for (let i = 0; i < boardTiles.length; i++) {
        const boardTile = boardTiles[i];
        const boardCoords = { x: boardTile.x, y: boardTile.y };
        for (let j = 0; j < occupiedCoords.length; j++) {
            const occupiedCoord = occupiedCoords[j];
            const occupiedCoordinates = {x: occupiedCoord.x, y: occupiedCoord.y };
            if ((boardCoords.x == occupiedCoordinates.x) && (boardCoords.y == occupiedCoordinates.y)) {
                boardTile.classList.add('ship');
            };
        };
    };
};

export { renderGameboard, renderShips };
