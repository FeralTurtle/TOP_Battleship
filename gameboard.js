import { placeShipX, placeShipY } from './placeShipHelpers.js';

const Gameboard = () => {
    const boardInfo = {
        gridSize: 10,
        occupiedCoords: [],
        missedAttacks: [],
    };
    const placeShip = (ship, direction, x, y) => {
        if (direction == 'horizontal') {
            return placeShipX(boardInfo, ship, x, y);
        } else if (direction == 'vertical') {
            return placeShipY(boardInfo, ship, x, y);
        };
    };
    const receiveAttack = (x, y) => {
        const hitCoordinates = boardInfo.occupiedCoords.find(coords => (coords.x == x && coords.y == y));
        console.log('hitCoordinates:');
        console.log(hitCoordinates);
        if (hitCoordinates) { //Damage ship
            const occupyingShip = hitCoordinates.occupyingShip;
            const occupyingShipPartNum = hitCoordinates.partNumber;
            occupyingShip.markHit(occupyingShipPartNum);
            console.log('occupyingShip');
            console.log(occupyingShip);
            const hitPart = hitCoordinates.occupyingShip.shipParts.find(element => element.partHit);
            return 'hit';
        } else { //Record missed hit
            boardInfo.missedAttacks.push({ x, y });
            return 'miss';
        };
    };
    const determineAllSunk = () => {
        const placedShips = [];
        let shipIntact;
        boardInfo.occupiedCoords.forEach(element => placedShips.push(element.occupyingShip));
        placedShips.forEach(placedShip => {
            const sunkStatus = placedShip.checkSunk();
            if (sunkStatus == false) {
                shipIntact = true;
            };
        });
        return shipIntact ? false : true;
    };
    return { boardInfo, placeShip, receiveAttack, determineAllSunk };
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

export { Gameboard, addTileCoords };