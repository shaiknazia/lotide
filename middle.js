

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

const middle = function(array) {
  if (array.length <= 2) {
    return ('there is no middle.')
  } else if(array.length % 2 === 0) {
    return (`Middles are ${array[(array.length/2) - 1]} and ${array[array.length/2]}.`)
  } else {
    return (`Middle is ${array[Math.floor(array.length/2)]}.`)
  }
}

console.log(middle([1, 2, 3]))// => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4]))





