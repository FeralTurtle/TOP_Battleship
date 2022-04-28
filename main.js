//Initialize Players and Gameboards
//Each gameboard should be populated with predetermined/hardcoded coordinates for now. Ship placement later.
//HTML should display both player boards and render them using Gameboard object
//Need gameboard render method, take user attack input method in the form of a click.
//Call end game method from Game module when game ends.

const Ship = (length, hit, sunk) => {
    //Based on the given length, create an array of ship part objects that comprise the ship
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
    return { length, hit, sunk, markHit, checkSunk };
};

const Gameboard = () => {
    const occupiedCoords = [];
    const placeShip = (ship, x, y) => {
        const withinGrid = ((x >= 1 && x <= 10) && (y >= 1 && y <= 10));
        const spaceAvailable = 10 - y;
        if (withinGrid && (ship.length <= spaceAvailable)) {
            //start at given coordinates, then y + (ship length - 1) to get iterator length, run a for loop that amount of times starting/incrementing at y, pairing with x
            //to make occupied coordinates to push
            const lastYCoord = y + (ship.length - 1);
            for (let i = y; i <= lastYCoord; i++) {
                const coordinates = { x: x, y: i };
                occupiedCoords.push(coordinates)
            };
            return 'ship placed';
        } else {
            return 'could not place ship';
        };
    };
    const receiveAttack = (coords) => {
        //hit or miss
        //if hit markhit to the correct ship
        //else if miss record coords of miss
    };
    const missedAttacks = [];
    const determineAllSunk = () => {
        //Check if all ships have been sunk
    };
    return { occupiedCoords, placeShip};
};

const Player = () => {
    let ownTurn = false;
    const randomPlay = () => {
        //Make a random legal move
    };
    return { ownTurn, randomPlay };
};

export { Ship, Gameboard };
