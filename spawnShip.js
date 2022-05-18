import { makeShipByName, isInArray, updateStockText, removeArrayElementByValue } from './battleship.js';
import { Gameboard } from './gameboard.js';
import { renderShips } from './render.js';

const getRandomInt = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
};

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

const spawnComputerShips = (board, shipStock) => {
    console.log('spawnComputerShips()');
    console.log(shipStock.length);
    while (!shipStock.length == 0) {
        const currentShipName = shipStock[0];
        console.log(`currentComputerShipName: ${currentShipName}`);
        let ship;
        const inArray = isInArray(shipStock, currentShipName);
        if (inArray) { //removing elements causes discrepency with for loop count
            ship = makeShipByName(currentShipName);
            removeArrayElementByValue(shipStock, currentShipName);
        } else {
            console.log('could not spawn ship. not in array.');
            return;
        };
        let direction = getRandomDirection();
        let x = getRandomInt(1, 10);
        console.log(`x: ${x}`);
        let y = getRandomInt(1, 10);
        console.log(`y: ${y}`);

        console.log('ship');
        console.log(ship);
        //retry placement
        let shipPlacement = board.placeShip(ship, direction, x, y);
        console.log(`shipPlacement: ${shipPlacement}`);
        if (shipPlacement == 'could not place ship') {
            while (shipPlacement == 'could not place ship') {
                console.log('RETRY:')
                direction = getRandomDirection();
                x = getRandomInt(1, 10);
                console.log(`x: ${x}`);
                y = getRandomInt(1, 10);
                console.log(`y: ${y}`);
                shipPlacement = board.placeShip(ship, direction, x, y);
            };
            shipPlacement == 'ship placed';
        };
        const boardTiles2 = document.querySelectorAll('.boards-container > div:nth-child(2) > div');
        renderShips(board, boardTiles2);
        console.log('end ship stock length');
        console.log(shipStock.length);
    };
};

export { spawnShip, spawnComputerShips };
