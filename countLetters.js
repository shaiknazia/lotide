//assertEqual function begins
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};
//AssertEqual function ends

const countLetters = function(string){
  let str = string.replace(/\s/g, '').toLowerCase();
  let object = {};

  for (let letter of str) {
      object[letter] = 0;
    for (let charLetter of str) {
      if (letter === charLetter) {
        object[letter] += 1
      }
    }
  }
  console.log (object)
}

countLetters("lighthouse in the house")