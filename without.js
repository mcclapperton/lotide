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
const without = function (source, itemsToRemove) {
  let newArr = [];
  for (let i = 0; i < source.length; i++) {
    if (!itemsToRemove.includes(source[i])) {
      newArr.push(source[i]);
    }
  }
  return newArr;
};
