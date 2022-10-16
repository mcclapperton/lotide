const assertEqual = function (actual, expected) {
  const errorMsg = `😡😡😡 ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else console.assert(actual === expected, errorMsg);
};
const tail = function (end) {
  let shortened = end.slice(1);
  return shortened;
};
const evaluated = tail(["yoohoo", "yellow", "frame"]);
assertEqual(evaluated.length, 2);
assertEqual(evaluated[0], "yellow");
assertEqual(evaluated[1], "frame");

const otherWords = ["me", "flower", "pony"];
tail(otherWords);
assertEqual(otherWords.length, 3);
