const assertArraysEqual = require("../assertArraysEqual");
const letterPositions = require("../letterPosition");

const sentence = "yoohoo";

const resultObject = letterPositions(sentence);
assertArraysEqual(resultObject["o"], [1, 2, 4, 5]);

assertArraysEqual(resultObject["y"], [0]);
