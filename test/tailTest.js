
const assert = require('chai').assert;
const tail = require('../tail');

const words = ["Yo Yo", "Lighthouse", "Labs"];

describe("#tail", () => {
  it("returns true if both arrays are equal", () => {
    assert.deepEqual((tail(words)),["Lighthouse", "Labs"] )
  });
});