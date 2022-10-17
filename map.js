//const words = ["breakfast", "turkey", "egg salad", "ham"];
const map = function (array, callback) {
  const final = [];
  for (let element of array) {
    final.push(callback(element));
    // console.log("before:", element);
    // console.log("after:", callback(element));
    // console.log("---");
  }
  return final;
};
// const finals = map(words, (word) => word[0]);
// console.log(finals);

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
//assertArraysEqual(finals, ["b", "t", "e", "h"]);
//const words = ["b", "be", "bew", "bewn"];
// const arrays = map(words, (word) => word.length);
// assertArraysEqual(arrays, [1, 2, 3, 4]);

// const words = ["b", "be", "bew", "bewn"];
// const arrays = map(words, (word) => word[2]);
// assertArraysEqual(arrays, [undefined, undefined, "w", "w"]);
