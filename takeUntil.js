const takeUntil = function (objects, callback) {
  const final = [];
  for (let object of objects) {
    if (!callback(object)) {
      final.push(object);
    } else return final;
  }
};

module.exports = takeUntil;
