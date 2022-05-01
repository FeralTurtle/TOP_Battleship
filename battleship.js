//Initialize Players and Gameboards
//Each gameboard should be populated with predetermined/hardcoded coordinates for now. Ship placement later.
//HTML should display both player boards and render them using Gameboard object
//Need gameboard render method, take user attack input method in the form of a click.
//Call end game method from Game module when game ends.

const Ship = (length) => {
    let hit = false;
    let sunk = false;
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
    const gridSize = 10;
    const occupiedCoords = [];
    const missedAttacks = [];
    const placeShip = (ship, x, y) => {
        const withinGrid = ((x >= 1 && x <= gridSize) && (y >= 1 && y <= gridSize));
        const spaceAvailable = gridSize - y;
        let partCounter = 1;
        if (withinGrid && (ship.length <= spaceAvailable)) {
            const lastYCoord = y + (ship.length - 1);
            for (let i = y; i <= lastYCoord; i++) {
                const newOccupiedCoordinates = { x: x, y: i, occupyingShip: ship, partNumber: partCounter };
                occupiedCoords.push(newOccupiedCoordinates);
                partCounter++;
            };
            return 'ship placed';
        } else {
            return 'could not place ship';
        };
        return { gridSize };
    };

    const renderGameboard = () => {

    };

    const receiveAttack = (x, y) => {
        const hitCoordinates = occupiedCoords.find(coords => (coords.x == x && coords.y == y));
        if (hitCoordinates) {
            const occupyingShip = hitCoordinates.occupyingShip;
            const occupyingShipPartNum = hitCoordinates.partNumber;
            occupyingShip.markHit(occupyingShipPartNum);
            const hitPart = hitCoordinates.occupyingShip.shipParts.find(element => element.partHit);
            return hitPart;
        } else {
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
    return { occupiedCoords, missedAttacks, placeShip, receiveAttack, determineAllSunk };
};

const Player = () => {
    //Ships already in place. Attempt to attack other board.. testboard2.receiveAttack()
    //Switch turn. Handle in Game module probably.
    let ownTurn = false;
    const randomPlay = () => {
        //if coords is not already attacked/in occupied or missed hits array
        //testBoard1.receiveAttack(random int 1-10, 2) 
    };
    return { ownTurn, randomPlay };
};

//If player1 turn
//testboard2.receiveAttack
//Else if player2 turn
//testboard1.receiveAttack

export { Ship, Gameboard, Player };
