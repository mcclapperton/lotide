const eqArrays = require("./eqArrays");
const assertArraysEqual = function (firstArr, secondArr) {
  let same = eqArrays(firstArr, secondArr);
  let final = "";
  if (same) {
    final += `👌👌 Assertion passed: [${firstArr}] === [${secondArr}]`;
  } else {
    final += `😡😡 Assertion failed: [${firstArr}] !== [${secondArr}]`;
  }
  console.log(final);
};

module.exports = assertArraysEqual;
