const eqArrays = function (firstArr, secondArr) {
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (let i = 0; i < firstArr.length; i++) {
    if (firstArr[i] !== secondArr[i]) {
      return false;
    }
  }

  return true;
};
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

const takeUntil = function (objects, callback) {
  const final = [];
  for (let object of objects) {
    if (!callback(object)) {
      final.push(object);
    } else return final;
  }
};

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, (x) => x < 0);
console.log(results1);

console.log("---");

const data2 = [
  "I've",
  "been",
  "to",
  ",",
  "Hollywood",
  ",",
  "I've",
  "been",
  "to",
  "Redwood",
];
const results2 = takeUntil(data2, (x) => x === ",");
console.log(results2);
assertArraysEqual(results1, [1, 2, 5, 7, 2]);
assertArraysEqual(results2, ["I've", "been", "to"]);
