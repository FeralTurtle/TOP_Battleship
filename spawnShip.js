import { makeShipByName, isInArray, updateStockText, removeArrayElementByValue } from './battleship.js';
import { Gameboard } from './gameboard.js';
import { renderShips } from './render.js';

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const getRandomDirection = () => {
    const randomInt = getRandomInt(0, 1);
    if (randomInt == 0) {
        return 'horizontal';
    } else if (randomInt == 1) {
        return 'vertical';
    };
};

const spawnShip = (board, shipStock) => {
    console.log(`board:`);
    console.log(board);
    console.log(`shipStock: ${shipStock}`);
    const shipName = document.querySelector('#ship-name');
    const xCoord = document.querySelector('#x-coordinates');
    const yCoord = document.querySelector('#y-coordinates');
    const direction = document.querySelector('#direction');
    const x = parseInt(xCoord.value);
    const y = parseInt(yCoord.value);
    let ship;
    //Make ship
    const inArray = isInArray(shipStock, shipName.value);
    console.log(`inArray: ${inArray}`);
    if (inArray) {
        ship = makeShipByName(shipName.value);
        updateStockText(shipName.value);
        removeArrayElementByValue(shipStock, shipName.value);
    } else {
        console.log('could not spawn ship');
        return;
    };
    //Call gameboard.placeShip(ship, direction, x, y) to place the ship
    console.log(`direction.value: ${direction.value}, xCoord.x: ${x}, yCoord.y ${y}`);
    board.placeShip(ship, direction.value, x, y);
    //Call renderShip(occupiedCoords), to render the ship
    const boardTiles1 = document.querySelectorAll('.boards-container > div:nth-child(1) > div');
    renderShips(board, boardTiles1);
};

// const spawnComputerShips = (board, shipStock) => {
//     let ship;
//     const inArray = isInArray(shipStock, shipName.value);
//     if (inArray) {
//         ship = makeShipByName(shipName.value);
//         removeArrayElementByValue(shipStock, shipName.value);
//     } else {
//         console.log('could not spawn ship');
//         return;
//     };
//     const direction = getRandomDirection();
//     const x = getRandomInt(0, 10);
//     const y = getRandomInt(0, 10);

//     board.placeShip(ship, direction, x, y);

//     const boardTiles2 = document.querySelectorAll('.boards-container > div:nth-child(2) > div');
//     renderShips(board, boardTiles2);
// };

export { spawnShip };
