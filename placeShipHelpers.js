const isPathBlockedX = (boardInfo, ship, x, y) => {
    console.log('isPathBlockedX');
    const lastXCoord = x + (ship.length - 1);
    for (let i = x; i <= lastXCoord; i++) {
        const spawnCoords = { x: i, y: y };
        const match = (element) => ((element.x == spawnCoords.x) && (element.y == spawnCoords.y));
        console.log(`isPathBlockedX return value: ${boardInfo.occupiedCoords.some(match)}`);
        return boardInfo.occupiedCoords.some(match);
    };
};

const buildShipX = (boardInfo, ship, x, y) => {
    console.log('buildShipX');
    const lastXCoord = x + (ship.length - 1);
    let partCounter = 1;
    for (let i = x; i <= lastXCoord; i++) {
        const newOccupiedCoordinates = { x: i, y: y, occupyingShip: ship, partNumber: partCounter };
        boardInfo.occupiedCoords.push(newOccupiedCoordinates);
        partCounter++;
    };
};

const placeShipX = (boardInfo, ship, x, y) => {
    console.log('placeShipX()');
    const withinGrid = ((x >= 1 && x <= boardInfo.gridSize) && (y >= 1 && y <= boardInfo.gridSize));
    const spaceAvailable = boardInfo.gridSize - x;
    if (withinGrid && (ship.length <= spaceAvailable)) {
        const pathBlocked = isPathBlockedX(boardInfo, ship, x, y);
        if (!pathBlocked) {
            buildShipX(boardInfo, ship, x, y);
            return 'ship placed';
        } else if (pathBlocked) {
            console.log('PATH BLOCKED');
            return 'could not place ship';
        };
    } else {
        console.log('placeShipX COULD NOT place');
        return 'could not place ship';
    };
};

const isPathBlockedY = (boardInfo, ship, x, y) => { // return true/false if path is clear or not
    const lastYCoord = y + (ship.length - 1);
    for (let i = y; i <= lastYCoord; i++) {
        const spawnCoords = { x: x, y: i };
        const match = (element) => ((element.x == spawnCoords.x) && (element.y == spawnCoords.y));
        return boardInfo.occupiedCoords.some(match);
    };
};

const buildShipY = (boardInfo, ship, x, y) => { // push to occupiedCoords array with new coords
    const lastYCoord = y + (ship.length - 1);
    let partCounter = 1;
    for (let i = y; i <= lastYCoord; i++) {
        const newOccupiedCoordinates = { x: x, y: i, occupyingShip: ship, partNumber: partCounter };
        boardInfo.occupiedCoords.push(newOccupiedCoordinates);
        partCounter++;
    };
};

const placeShipY = (boardInfo, ship, x, y) => {
    //Distribute ship parts along path
    const withinGrid = ((x >= 1 && x <= boardInfo.gridSize) && (y >= 1 && y <= boardInfo.gridSize));
    const spaceAvailable = boardInfo.gridSize - y;
    if (withinGrid && (ship.length <= spaceAvailable)) {
        const pathBlocked = isPathBlockedY(boardInfo, ship, x, y);
        if (!pathBlocked) { //Place ship along path.
            buildShipY(boardInfo, ship, x, y);
            return 'ship placed';
        } else if (pathBlocked) {
            return 'could not place ship';
        };
    } else {
        return 'could not place ship';
    }
};

export { placeShipX, placeShipY };