//Initialize Players and Gameboards
//Each gameboard should be populated with predetermined/hardcoded coordinates for now. Ship placement later.
//HTML should display both player boards and render them using Gameboard object
//Need gameboard render method, take user attack input method in the form of a click.
//Call end game method from Game module when game ends.

const Ship = (length, hit, sunk) => {
    const shipParts = [];
    for (let i = 0; i < length; i++) {
        const shipPart = { part: i + 1, partHit: false };
        shipParts.push(shipPart);
    };
    const markHit = (partNumber) => {
        hit = true;
        shipParts[partNumber - 1].partHit = true;
    };
    const checkSunk = () => {
        const partIsIntactTest = (part) => part.partHit == false;
        const partIsIntact = shipParts.some(partIsIntactTest);
        return (partIsIntact) ? false : true;
    };
    return { length, hit, sunk, shipParts, markHit, checkSunk };
};

const Gameboard = () => {
    const occupiedCoords = [];
    const missedAttacks = [];
    const placeShip = (ship, x, y) => {
        const withinGrid = ((x >= 1 && x <= 10) && (y >= 1 && y <= 10));
        const spaceAvailable = 10 - y;
        let partCounter = 1;
        if (withinGrid && (ship.length <= spaceAvailable)) {
            const lastYCoord = y + (ship.length - 1);
            for (let i = y; i <= lastYCoord; i++) {
                const newOccupiedCoordinates = { x: x, y: i, ship, partNumber: partCounter };
                occupiedCoords.push(newOccupiedCoordinates);
                partCounter++;
            };
            return 'ship placed';
        } else {
            return 'could not place ship';
        };
    };
    const receiveAttack = (x, y) => {
        const hitCoordinates = occupiedCoords.find(coords => (coords.x == x && coords.y == y));
        if (hitCoordinates) {
            const occupyingShip = hitCoordinates.ship;
            const occupyingShipPartNum = hitCoordinates.partNumber;
            occupyingShip.markHit(occupyingShipPartNum);
            const hitPart = hitCoordinates.ship.shipParts.find(element => element.partHit);
            return hitPart;
        } else {
            missedAttacks.push({ x, y });
        };
    };
    const determineAllSunk = () => {
    };
    return { occupiedCoords, missedAttacks, placeShip, receiveAttack };
};

const Player = () => {
    let ownTurn = false;
    const randomPlay = () => {
    };
    return { ownTurn, randomPlay };
};

export { Ship, Gameboard };