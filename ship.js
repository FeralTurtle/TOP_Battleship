const foo = (a, b) => {
    return a + b;
};

//Initialize Players and Gameboards
//Each gameboard should be populated with predetermined/hardcoded coordinates for now. Ship placement later.
//HTML should display both player boards and render them using Gameboard object
    //Need gameboard render method, take user attack input method in the form of a click.
//Call end game method from Game module when game ends.

const Ship = (length, hit, sunk) => {
    const markHit = (x, y) => {
        //Mark passed in coordinates as 'hit', sets hit to True
        //Mark passed in number (length / index) and mark as 'hit'.
        const coordsHit = {
            coordinates: [x, y],
            coordHit: true,
        };
        return coordsHit;
    };
    const determineSunk = () => {
        //If all positions are hit, sunk becomes True. Loop through length, checking if all are hit.
        //Maybe receive some sort of array of coordsHit objects, loop through it and if hit is true for all of them, then sunk is true
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
