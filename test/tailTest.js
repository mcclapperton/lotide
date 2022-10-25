const assert = require("chai").assert;
const tail = require("../tail");

describe("#tail", () => {
  it("returns 'yellow', 'frame' for ['yoohoo', 'yellow', 'frame']", () => {
    assert.deepEqual(tail(["yoohoo", "yellow", "frame"]), ["yellow", "frame"]);
  });
  it("returns 'flower', 'pony' for ['me', 'flower', 'pony']", () => {
    assert.deepEqual(tail(["me", "flower", "pony"]), ["flower", "pony"]);
  });
});
