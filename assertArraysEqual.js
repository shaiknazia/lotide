const eqArrays = require('../eqArrays');

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed`) 
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

module.exports = assertArraysEqual;