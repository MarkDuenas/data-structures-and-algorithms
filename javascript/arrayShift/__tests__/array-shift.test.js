'use strict';

const arrayShift = require('../array-shift.js');

describe('Array Shift', () => {

  it('should shift the array(even)', () => {
    let array = [1,2,4,5];
    let expected = [1,2,3,4,5];

    arrayShift(array, 3);
    expect(array).toEqual(expected);
  });

});

describe('Array Shift', () => {

  it('should shift the array(odd)', () => {
    let array = [1,2,4,5,6];
    let expected = [1,2,3,4,5,6];

    arrayShift(array, 3);
    expect(array).toEqual(expected);
  });

});

describe('Array Shift', () => {

  it('Should insert into empty array', () => {
    let array = [];
    let expected = [3];

    arrayShift(array, 3);
    expect(array).toEqual(expected);
  });

});

describe('Array Shift', () => {

  it('Should insert value after single digit', () => {
    let array = [1];
    let expected = [1,3];

    arrayShift(array, 3);
    expect(array).toEqual(expected);
  });

});
