

const eqArrays = function (arr1, arr2) {
  if (arr1.length === arr2.length) {

    for (let i = 0; i < arr1.length; i++) {

      if ((arr1[i]) !== (arr2[i])) {
      return false;
      }
    }
} else {
    return false
  }
  return true;
}

function assertArraysEqual(arr1, arr2) {
  if (eqArrays(arr1, arr2)) {
    console.log(`✅✅✅ Assertion Passed`) 
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed`);
  }
}

assertArraysEqual([1, 2, 3], [1, 2, 3]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);