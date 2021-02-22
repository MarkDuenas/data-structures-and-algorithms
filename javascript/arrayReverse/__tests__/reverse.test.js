'use strict';

const arrayReverse = require('../array-reverse.js');

describe('Array Rerverse', () => {

  it('should reverse the array', () => {
    let myArray = [1,2,3,4,5];
    let expected = [5,4,3,2,1];
    arrayReverse(myArray);
    expect(myArray).toEqual(expected);
  });

});
