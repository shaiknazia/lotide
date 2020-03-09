//assertEqual function begins
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  let obj1 = Object.keys(object1);
  let obj2 = Object.keys(object2);
  
  if (obj1.length === obj2.length) {
    for (let i = 0; i < obj1.length; i++) {
      if ((obj1[i]) === (obj2[i]) || (obj1[i]) === (obj2[i + 1])) {
        return "true";
      }
    }
  } else {
      return "false"
      }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3" };


const assertObjectsEqual = function(actual, expected) {
  const inspect = require('until').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed : ${inspect(actual)} === ${inspect(expected)}`) 
  } else { 
    console.log(`🛑🛑🛑 Assertion Failed : ${inspect(actual)} === ${inspect(expected)}`);
  }
  // Implement me!
};