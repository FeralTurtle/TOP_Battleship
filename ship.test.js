import { foo, Ship } from './ship.js';

const testShip = Ship(4, false, false);

test('adds two numbers', () => {
    expect(foo(1,2)).toBe(3);
});

test('marks hit', () => {
    //After calling the function, expect hit property to be true
    expect(testShip.markHit(1,2)).toEqual([1,2]);
});

// test('determine if ship sank', () => {

// });
