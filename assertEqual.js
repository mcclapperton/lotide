const assertEqual = function (actual, expected) {
  const errorMsg = `😡😡😡 ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(` Assertion Passed: 👌👌👌 ${actual} === ${expected}`);
  } else console.assert(actual === expected, errorMsg);
};
module.exports = assertEqual;
