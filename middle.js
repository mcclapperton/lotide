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
  return oddArray;
};

module.exports = middle;
