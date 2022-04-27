const foo = (a, b) => {
    return a + b;
};

//Initialize Players and Gameboards
//Each gameboard should be populated with predetermined/hardcoded coordinates for now. Ship placement later.
//HTML should display both player boards and render them using Gameboard object
    //Need gameboard render method, take user attack input method in the form of a click.
//Call end game method from Game module when game ends.

const Ship = (length, hit, sunk) => {
    //Based on the given length, create an array of ship part objects that comprise the ship
    const shipParts = [];
    for (let i = 0; i < length; i++) {
        const shipPart = { part: i + 1, hit: false };
        shipParts.push(shipPart);
    };
    const markHit = (partNumber) => {
        shipParts[partNumber].hit = true;
    };
    const determineSunk = () => {
        const partIsHit = (element) => element.hit;
        shipParts.some(partIsHit);
    };
    return { length, hit, sunk, markHit, determineSunk };
};

const Gameboard = () => {
    const placeShip = () => {
        const newShip = Ship(4, false, false);
        //Put ship on grid
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
};

const Player = () => {
    let ownTurn = false;
    const randomPlay = () => {
        //Make a random legal move
    };
    return { ownTurn, randomPlay };
};

export { foo, Ship };
