const assertEqual = function (actual, expected) {
  const errorMsg = `😡😡😡 ${actual} !== ${expected}`;
  if (actual === expected) {
    console.log(`👌👌👌 Assertion Passed: ${actual} === ${expected}`);
  } else console.assert(actual === expected, errorMsg);
};

const eqArrays = function (firstArr, secondArr) {
  // console.log(firstArr.length);
  // console.log(secondArr.length);
  if (firstArr.length !== secondArr.length) {
    return false;
  }

  for (let i = 0; i < firstArr.length; i++) {
    // console.log(firstArr[i]);
    // console.log(secondArr[i]);
    if (firstArr[i] !== secondArr[i]) {
      // console.log(firstArr[i]);
      return false;
    }
  }

  return true;
};
// Returns true if both objects have identical keyss with identical keyss.
// Otherwise false
const eqObjects = function (obj1, obj2) {
  // console.log(Object.keys(obj1))
  // console.log(Object.keys(obj2))
  if (Object.keys(obj1).length !== Object.keys(obj2).length) {
    return false;
  }
  for (let key1 of Object.keys(obj1)) {
    if (Array.isArray(obj1[key1]) && Array.isArray(obj2[key1])) {
      // console.log(obj1[key1]);
      // console.log(obj2[key1]);

      if (!eqArrays(obj1[key1], obj2[key1])) {
        return false;
      }
    } else if (obj1[key1] !== obj2[key1]) {
      // console.log(obj1[key1])
      // console.log(obj2[key1])
      return false;
    }
  }
  return true;
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false); // => false
