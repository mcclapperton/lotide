const findKeyByValue = function (genre, shows) {
  for (const show of Object.keys(genre)) {
    if (genre[show] === shows) {
      return show;
    }
  }
};

module.exports = findKeyByValue;
