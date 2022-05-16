const Ship = (name, length) => {
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
    return { name, length, hit, sunk, shipParts, markHit, checkSunk };
};

const makeShipByName = (name) => {
    let newShip;
    switch (name) {
        case 'carrier':
            return newShip = Ship(name, 5);
        case 'battleship':
            return newShip = Ship(name, 4);
        case 'cruiser':
            return newShip = Ship(name, 3);
        case 'submarine':
            return newShip = Ship(name, 3);
        case 'destroyer':
            return newShip = Ship(name, 2);
    };
};

const isInArray = (array, element) => {
    const index = array.indexOf(element);
    if (index == 1) {
        return true;
    } else if (index == -1) {
        return false;
    };
};

const removeArrayElementByValue = (array, value) => {
    const elementIndex = array.indexOf(value);
    if (elementIndex) {
        array.splice(elementIndex, 1);
    };
};

const Player = () => {
    let ownTurn = false;
    const randomPlay = () => {
        //if coords is not already attacked/in occupied or missed hits array
        //testBoard1.receiveAttack(random int 1-10, 2) 
    };
    return { ownTurn, randomPlay };
};

export { Ship, Player, makeShipByName, isInArray, removeArrayElementByValue };
