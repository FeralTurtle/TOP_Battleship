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

const Player = () => {
    let ownTurn = false;
    const randomPlay = () => {
        //if coords is not already attacked/in occupied or missed hits array
        //testBoard1.receiveAttack(random int 1-10, 2) 
    };
    return { ownTurn, randomPlay };
};

export { Ship, Player };
