const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");
const words = [1, 2, 3, 4];
assertArraysEqual(middle(words), [2, 3]);
