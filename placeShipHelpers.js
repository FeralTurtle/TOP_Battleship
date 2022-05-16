const isPathBlockedX = (boardInfo, ship, x, y) => {
    const lastXCoord = x + (ship.length - 1);
    for (let i = x; i <= lastXCoord; i++) {
        const spawnCoords = { x: i, y: y };
        const match = (element) => ((element.x == spawnCoords.x) && (element.y == spawnCoords.y));
        return boardInfo.occupiedCoords.some(match);
    };
};

const buildShipX = (boardInfo, ship, x, y) => {
    const lastXCoord = x + (ship.length - 1);
    let partCounter = 1;
    for (let i = x; i <= lastXCoord; i++) {
        const newOccupiedCoordinates = { x: i, y: y, occupyingShip: ship, partNumber: partCounter };
        boardInfo.occupiedCoords.push(newOccupiedCoordinates);
        partCounter++;
    };
};

const placeShipX = (boardInfo, ship, x, y) => {
    const withinGrid = ((x >= 1 && x <= boardInfo.gridSize) && (y >= 1 && y <= boardInfo.gridSize));
    const spaceAvailable = boardInfo.gridSize - x;
    if (withinGrid && (ship.length <= spaceAvailable)) {
        const pathBlocked = isPathBlockedX(ship, x, y);
        if (!pathBlocked) {
            buildShipX(boardInfo, ship, x, y);
            return 'ship placed';
        } else {
            return 'could not place ship';
        };
    };
};

const isPathBlockedY = (boardInfo, ship, x, y) => { // return true/false if path is clear or not
    // console.log('checkClearSpawnPathY()');
    const lastYCoord = y + (ship.length - 1);
    // console.log(`lastYCoord: ${lastYCoord}`);
    for (let i = y; i <= lastYCoord; i++) {
        const spawnCoords = { x: x, y: i };
        const match = (element) => ((element.x == spawnCoords.x) && (element.y == spawnCoords.y));
        return boardInfo.occupiedCoords.some(match);
    };
};
const buildShipY = (boardInfo, ship, x, y) => { // push to occupiedCoords array with new coords
    // console.log('buildShipY');
    const lastYCoord = y + (ship.length - 1);
    let partCounter = 1;
    for (let i = y; i <= lastYCoord; i++) {
        const newOccupiedCoordinates = { x: x, y: i, occupyingShip: ship, partNumber: partCounter };
        boardInfo.occupiedCoords.push(newOccupiedCoordinates);
        partCounter++;
    };
    // console.log(`occupiedCoords.length ${occupiedCoords.length}`);
    // console.log('occupiedCoords:');
    // boardInfo.occupiedCoords.forEach(element => console.log(`x: ${element.x}, y: ${element.y}`));
    // console.log(occupiedCoords[1].y);
};
const placeShipY = (boardInfo, ship, x, y) => {
    //Distribute ship parts along path
    // console.log('placeShipY()');
    const withinGrid = ((x >= 1 && x <= boardInfo.gridSize) && (y >= 1 && y <= boardInfo.gridSize));
    const spaceAvailable = boardInfo.gridSize - y;
    if (withinGrid && (ship.length <= spaceAvailable)) {
        const pathBlocked = isPathBlockedY(ship, x, y);
        // console.log(`occupiedCoords: ${occupiedCoords}`);
        // console.log(`path blocked: ${pathBlocked}`);
        if (!pathBlocked) { //Place ship along path.
            buildShipY(boardInfo, ship, x, y);
            return 'ship placed';
        } else {
            return 'could not place ship';
        };
    };
};

export { placeShipX, placeShipY };