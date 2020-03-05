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

const flatten = function(array) {
  const result = [];
  array.forEach(function(element) {
    if (Array.isArray(element)) {
      element.forEach(function(item) {
        result.push(item)
      })
    } else {
      result.push(element)
    }
  })
  return result;
};

console.log(flatten([1, 2, [3, 4], 5, [6]]))