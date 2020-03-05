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

const without = function(sourceArr, itemsToRemove) {
  // return result = sourceArr[i] - itemsToRemove[i]
  let result = [];
  sourceArr.forEach(function(element) {
    if (itemsToRemove.includes(element) === false) {
      result.push(element);
    }
  });
  return result;
};

console.log (without([1, 2, 3], [1])) // => [2, 3]
console.log (without(["1", "2", "3"], [1, 2, "3"])) 