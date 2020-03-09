const middle = require('../middle');
const assertEqual = require('../assertEqual');

assertEqual((middle([1, 2, 3])),`Middle is 2`)// => [2]
assertEqual((middle([1, 2, 3, 4, 5])), `Middle is 3`)

