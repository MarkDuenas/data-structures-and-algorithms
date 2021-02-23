'use strict';

function arrayShift (arr, val) {
  let mid = Math.ceil(arr.length / 2);

  arr.push(0);

  let tempVal = arr[mid];
  arr[mid] = val;


  for( let i = mid; i < arr.length -1 ; i ++ ) {
    let temp = arr[i+1];
    arr[i+1] = tempVal; 
    tempVal = temp;
  };

  return arr;
}

module.exports = arrayShift;
