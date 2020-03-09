//Array.map

//callbackfnctn

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    if ()
    console.log('item BEFORE: ', item);
    console.log('item AFTER: ', callback(item));
    console.log('---');
  }
  return results;
}

const results1 = map(words, word => word[0]);
console.log(results1);

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}