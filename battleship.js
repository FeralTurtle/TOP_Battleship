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
            newShip = Ship(name, 5);
            break;
        case 'battleship':
            newShip = Ship(name, 4);
            break;
        case 'cruiser':
            newShip = Ship(name, 3);
            break;
        case 'submarine':
            newShip = Ship(name, 3);
            break;
        case 'destroyer':
            newShip = Ship(name, 2);
            break;
    };
    return newShip;
};

const Player = () => {
    let ownTurn = false;
    const randomPlay = () => {
        //if coords is not already attacked/in occupied or missed hits array
        //testBoard1.receiveAttack(random int 1-10, 2) 
    };
    return { ownTurn, randomPlay };
};

export { Ship, Player, makeShipByName };
