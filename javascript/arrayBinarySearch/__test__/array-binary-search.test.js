'use strict';

const binarySearch = require('../array-binary-search.js');

describe('Binary Search', () => {

  it('Should find target value in array', () => {
    let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
    let target = 33;
    let expected = 3;

    expect(binarySearch(array, target)).toEqual(expected);
  });

  it('Should return -1 if target is not in array', () => {
    let array = [0, 1, 21, 33, 45, 45, 61, 71, 72, 73];
    let target = -5;
    let expected = -1;

    expect(binarySearch(array, target)).toEqual(expected);
  });

  it('Should return -1 if array is empty', () => {
    let array = [];
    let target = 45;
    let expected = -1;

    expect(binarySearch(array,target)).toEqual(expected);
  });

});


