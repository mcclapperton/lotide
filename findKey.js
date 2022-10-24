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
module.exports = findKey;
