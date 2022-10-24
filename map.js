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

module.exports = map;
