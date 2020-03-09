const assert = require('chai').assert;
const middle = require('../middle');



describe("#Middle", () => {
  it("Middle is 2", () => {
    assert.deepEqual((middle([1, 2, 3])),`Middle is 2` )
  });
  it("Middle is 3", () => {
    assert.deepEqual((middle([1, 2, 3, 4, 5])), `Middle is 3` )
  });
});