const assertEqual = require("../assertEqual");
const countLetters = require("../countLetters");
const word = "hamburger";
const output = countLetters(word);

assertEqual(output["h"], 1);
assertEqual(output["r"], 2);
assertEqual(output["m"], 1);
