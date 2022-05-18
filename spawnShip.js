import { makeShipByName, isInArray, updateStockText, removeArrayElementByValue } from './battleship.js';
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
    const shipName = document.querySelector('#ship-name');
    const xCoord = document.querySelector('#x-coordinates');
    const yCoord = document.querySelector('#y-coordinates');
    const direction = document.querySelector('#direction');
    const x = parseInt(xCoord.value);
    const y = parseInt(yCoord.value);
    let ship;
    //Make ship
    const inArray = isInArray(shipStock, shipName.value);
    if (inArray) {
        ship = makeShipByName(shipName.value);
        updateStockText(shipName.value);
        removeArrayElementByValue(shipStock, shipName.value);
    } else {
        return;
    };
    //Call gameboard.placeShip(ship, direction, x, y) to place the ship
    board.placeShip(ship, direction.value, x, y);
    //Call renderShip(occupiedCoords), to render the ship
    const boardTiles1 = document.querySelectorAll('.boards-container > div:nth-child(1) > div');
    renderShips(board, boardTiles1, 'player1');
};

const spawnComputerShips = (board, shipStock) => {
    while (!shipStock.length == 0) {
        const currentShipName = shipStock[0];
        let ship;
        const inArray = isInArray(shipStock, currentShipName);
        if (inArray) { //removing elements causes discrepency with for loop count
            ship = makeShipByName(currentShipName);
            removeArrayElementByValue(shipStock, currentShipName);
        } else {
            return;
        };
        let direction = getRandomDirection();
        let x = getRandomInt(1, 10);
        let y = getRandomInt(1, 10);

        //retry placement
        let shipPlacement = board.placeShip(ship, direction, x, y);
        if (shipPlacement == 'could not place ship') {
            while (shipPlacement == 'could not place ship') {
                direction = getRandomDirection();
                x = getRandomInt(1, 10);
                y = getRandomInt(1, 10);
                shipPlacement = board.placeShip(ship, direction, x, y);
            };
            shipPlacement == 'ship placed';
        };
        const boardTiles2 = document.querySelectorAll('.boards-container > div:nth-child(2) > div');
        renderShips(board, boardTiles2, 'computer');
    };
};

export { spawnShip, spawnComputerShips, getRandomInt };
