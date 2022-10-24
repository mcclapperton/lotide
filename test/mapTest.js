const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

// const finals = map(words, (word) => word[0]);
// console.log(finals);

// assertArraysEqual(finals, ["b", "t", "e", "h"]);
const words = ["b", "be", "bew", "bewn"];
const arrays = map(words, (word) => word.length);
assertArraysEqual(arrays, [1, 2, 3, 4]);

// const words = ["b", "be", "bew", "bewn"];
// const arrays = map(words, (word) => word[2]);
// assertArraysEqual(arrays, [undefined, undefined, "w", "w"]);
