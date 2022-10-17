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
const middle = function (middleArr) {
  let oddArray = [];
  let index = middleArr.length;
  if (index <= 1) {
    return false;
  }
  if (index % 2 === 0) {
    oddArray.push(middleArr[index / 2 - 1]);
    oddArray.push(middleArr[index / 2]);
  }
  if (index % 2 !== 0) {
    oddArray.push(middleArr[Math.floor(index / 2)]);
  }
  console.log(oddArray);
};
const words = [1, 2, 3, 4];

assertArraysEqual(middle(words), [2, 3]);
