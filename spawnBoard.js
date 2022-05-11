import { Ship } from './battleship.js';

const renderSpawnBoard = (board) => {
    for (let i = 0; i < 40; i++) {
        const newTile = document.createElement('div');
        board.append(newTile);
    };
};

const addSpawnBoardTileCoords = (boardTiles) => {
    const tilesArray = Array.from(boardTiles);
    let xCount = 1;
    let yCount = 1;
    for (let i = 0; i < tilesArray.length; i++) {
        const currentTile = tilesArray[i];
        currentTile.x = xCount;
        currentTile.y = yCount;
        xCount++;
        if (xCount == 9) {
            yCount++;
            xCount = 1;
        };
    };
};

//Grids have coords
//The spawn ship function only specifies what parts of the grid should be rendered.
//Use array.find to get the object references of the matching coords to loop through
//The properties of the grid tile objects should be adjusted to "render" the ship
const spawnShipAt = (ship, direction, x, y) => {
    const withinGrid = ((x >= 1 && x <= 8) && (y >= 1 && y <= 5));
    let spaceAvailable;
    let partCounter = 1;
    if (direction == 'vertical') {
        spaceAvailable = 5 - y;
        if (withinGrid && (ship.length <= spaceAvailable)) { //Check if valid placement
            const lastYCoord = y + (ship.length - 1);
            for (let i = y; i <= lastYCoord; i++) { // Increment y until reaching ship length
                // array to filter: the entire board
                // array filter board tiles that have the expected spawn coords
            };
            return 'ship spawned'; // return array of object references to spawn ship at
        };
    } else if (direction == 'horizontal') {
        spaceAvailable = 8 - x;
        if (withinGrid && (ship.length <= spaceAvailable)) {
            const lastXCoord = x + (ship.length - 1);
            for (let i = x; i <= lastXCoord; i++) {
                const newOccupiedCoordinates = { x: i, y: y, occupyingShip: ship, partNumber: partCounter };
                occupiedCoords.push(newOccupiedCoordinates);
                partCounter++;
            };
            return 'ship spawned'; // return array of object references to spawn ship at
        };
    } else {
        return 'could not spawn ship';
    };
};

const renderShip = (tileObjects) => {

};

export { renderSpawnBoard, addSpawnBoardTileCoords };
