import { Gameboard } from "./gameboard.js";

const renderGameboard = (board) => {
    const { gridSize } = Gameboard();
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newTile = document.createElement('div');
        board.append(newTile);
    };
};

const renderShip = (name, x, y, direction) => {

};

export { renderGameboard };