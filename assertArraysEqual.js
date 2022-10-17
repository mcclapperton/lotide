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
    final += `😡😡 Assertion passed: [${firstArr}] !== [${secondArr}]`;
  }
  console.log(final);
};
