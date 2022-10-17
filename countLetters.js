const assertEqual = function (actual, expected) {
  const errorMsg = `😡😡😡 ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else console.assert(actual === expected, errorMsg);
};
const countLetters = function (letters) {
  const results = {};
  for (const letter of letters) {
    if (letter !== " ") {
      if (results[letter]) {
        results[letter] += 1;
      } else {
        results[letter] = 1;
      }
    }
  }
  return results;
};
const word = "hamburger";
const output = countLetters(word);

assertEqual(output["h"], 1);
assertEqual(output["r"], 2);
assertEqual(output["m"], 1);
