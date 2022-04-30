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
    testBoard.placeShip(testShip, 2, 4);

    test('places ship on a valid coordinates', () => {
        const testCoordsX = testBoard.occupiedCoords[1].x;
        const testCoordsY = testBoard.occupiedCoords[1].y;
        const testCoords = { x: testCoordsX, y: testCoordsY };
        expect(testCoords).toEqual({x: 2, y: 5});
    });

    test('receives hits and marks correct ship as hit', () => {
        const target = testBoard.receiveAttack(2, 5);
        expect(target.part).toEqual(2);
    });

    test('records missed hits', () => {
        testBoard.receiveAttack(2, 6);
        expect(testBoard.missedAttacks[0]).toEqual({x: 2, y: 6});
    });
});

describe('test determineAllSunk()', () => {
    test('checks if all ships on the board are sunk', () => {
        const testBoard = Gameboard();
        const testShip = Ship(2, false, false);
        testBoard.placeShip(testShip, 2, 4);
        testBoard.receiveAttack(2, 4);
        testBoard.receiveAttack(2, 5);
        const sunkStatus = testBoard.determineAllSunk();
        expect(sunkStatus).toEqual(true);
    });

    test('checks if all ships on the board are not sunk', () => {
        const testBoard = Gameboard();
        const testShip = Ship(2, false, false);
        testBoard.placeShip(testShip, 2, 4);
        testBoard.receiveAttack(2, 4);
        testBoard.receiveAttack(2, 6);
        const sunkStatus = testBoard.determineAllSunk();
        expect(sunkStatus).toBe(false);
    });
});
