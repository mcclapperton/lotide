const assertArraysEqual = require("../assertArraysEqual");

const without = require("../without");

results1 = without(["hello", "work", "pls"], ["work"]);
assertArraysEqual(results1, ["hello", "pls"]);
