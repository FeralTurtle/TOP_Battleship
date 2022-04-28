import { Ship, Gameboard } from './main.js';

describe('test Ship factory function', () => {
    const testShip = Ship(4, false, false);

    test(`determine if ship is considered intact if there's at least one part intact`, () => {
        testShip.markHit(2);
        expect(testShip.checkSunk()).toBe(false);
    });

    test(`determine if ship sinks if all parts are hit`, () => {
        testShip.markHit(1);
        testShip.markHit(2);
        testShip.markHit(3);
        testShip.markHit(4);
        expect(testShip.checkSunk()).toBe(true);
    });
});

describe('test Gameboard factory function', () => {
    const testBoard = Gameboard();
    const testShip = Ship(2, false, false);

    test('places ship on a valid coordinates', () => {
        testBoard.placeShip(testShip, 2, 4);
        expect(testBoard.occupiedCoords).toEqual([{x: 2, y: 4}, {x: 2, y: 5}]);
    });
});
