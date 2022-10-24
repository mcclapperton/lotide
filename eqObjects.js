// Returns true if both objects have identical keyss with identical keyss.
// Otherwise false
const eqArrays = require("./eqArrays");
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

module.exports = eqObjects;
