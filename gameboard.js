const Gameboard = () => {
    const gridSize = 10;
    const occupiedCoords = [];
    const missedAttacks = [];
    const placeShip = (ship, direction, x, y) => {
        const withinGrid = ((x >= 1 && x <= gridSize) && (y >= 1 && y <= gridSize));
        let spaceAvailable;
        let partCounter = 1;
        if (direction == 'vertical') {
            spaceAvailable = gridSize - y;
            if (withinGrid && (ship.length <= spaceAvailable)) {
                const lastYCoord = y + (ship.length - 1);
                for (let i = y; i <= lastYCoord; i++) {
                    const newOccupiedCoordinates = { x: x, y: i, occupyingShip: ship, partNumber: partCounter };
                    occupiedCoords.push(newOccupiedCoordinates);
                    partCounter++;
                };
                return 'ship placed';
            };
        } else if (direction == 'horizontal') {
            spaceAvailable = gridSize - x;
            if (withinGrid && (ship.length <= spaceAvailable)) {
                const lastXCoord = x + (ship.length - 1);
                for (let i = x; i <= lastXCoord; i++) {
                    const newOccupiedCoordinates = { x: i, y: y, occupyingShip: ship, partNumber: partCounter };
                    occupiedCoords.push(newOccupiedCoordinates);
                    partCounter++;
                };
                return 'ship placed';
            };
        } else {
            return 'could not place ship';
        };
    };

    const receiveAttack = (x, y) => {
        const hitCoordinates = occupiedCoords.find(coords => (coords.x == x && coords.y == y));
        if (hitCoordinates) { //Damage ship
            const occupyingShip = hitCoordinates.occupyingShip;
            const occupyingShipPartNum = hitCoordinates.partNumber;
            occupyingShip.markHit(occupyingShipPartNum);
            const hitPart = hitCoordinates.occupyingShip.shipParts.find(element => element.partHit);
            return hitPart;
        } else { //Record missed hit
            missedAttacks.push({ x, y });
        };
    };
    const determineAllSunk = () => {
        const placedShips = [];
        let shipIntact;
        occupiedCoords.forEach(element => placedShips.push(element.occupyingShip));
        placedShips.forEach(placedShip => {
            const sunkStatus = placedShip.checkSunk();
            if (sunkStatus == false) {
                shipIntact = true;
            };
        });
        return shipIntact ? false : true;
    };
    return { gridSize, occupiedCoords, missedAttacks, placeShip, receiveAttack, determineAllSunk };
};

const renderGameboard = (board) => {
    const { gridSize } = Gameboard();
    for (let i = 0; i < gridSize * gridSize; i++) {
        const newTile = document.createElement('div');
        board.append(newTile);
    };
};

const addTileCoords = (boardTiles) => {
    const tilesArray = Array.from(boardTiles);
    let xCount = 1;
    let yCount = 1;
    for (let i = 0; i < tilesArray.length; i++) {
        const currentTile = tilesArray[i];
        currentTile.x = xCount;
        currentTile.y = yCount;
        xCount++;
        if (xCount == 11) {
            yCount++;
            xCount = 1;
        };
    };
};

export { Gameboard, renderGameboard, addTileCoords };