const eqObjects = require("../lotide/eqObjects");

const assertObjectsEqual = function (actual, expected) {
  const inspect = require("util").inspect;
  let identical = eqObjects(actual, expected);
  let final = "";
  if (identical) {
    final += `👌👌 Assertion passed: ${inspect(actual)} === ${inspect(
      expected
    )}`;
  } else {
    final += `😡😡 Assertion failed: ${inspect(actual)} !== ${inspect(
      expected
    )}`;
  }
  console.log(final);
};
module.exports = assertObjectsEqual;
