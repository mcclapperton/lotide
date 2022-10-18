const assertEqual = function (actual, expected) {
  const errorMsg = `😡😡😡 ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else console.assert(actual === expected, errorMsg);
};
const findKey = (object, callback) => {
  for (let key in object) {
    // console.log(callback(object[item]))
    // console.log((object[item]))
    if (callback(object[key])) {
      return key;
    }
  }
  return;
};
// console.log(
//   findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 2)
// ); // => "noma"
// console.log(
//   findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 5)
// ); // => "undefined"
// console.log(
//   findKey({
//     "Blue Hill": { stars: 1 },
//     "Akaleri":   { stars: 3 },
//     "noma":      { stars: 2 },
//     "elBulli":   { stars: 3 },
//     "Ora":       { stars: 2 },
//     "Akelarre":  { stars: 3 }
//   }, x => x.stars === 1)
// ); // => "noma"
assertEqual(
  findKey(
    {
      "Blue Hill": { stars: 1 },
      "Akaleri": { stars: 3 },
      'noma': { stars: 2 },
      'elBulli': { stars: 3 },
      'Ora': { stars: 2 },
      'Akelarre': { stars: 3 },
    },
    (x) => x.stars === 1
  ),
  "Blue Hill"
);
